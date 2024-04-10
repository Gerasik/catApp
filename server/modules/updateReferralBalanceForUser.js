const { User } = require('../modules/database');
const WebSocket = require('ws');

exports.updateReferralBalancesForUser = async (userId, wss) => {
    // Находим пользователя по ID
    const user = await User.findById(userId);
    if (!user) {
        console.log(`User with ID ${userId} not found.`);
        return;
    }

    // Вычисляем сумму hourly_balance всех рефералов пользователя
    const totalHourlyBalance = await User.aggregate([
        { $match: { referrer_id: user._id } },
        { $group: { _id: null, total: { $sum: "$hourly_balance" } } }
    ]);

    const totalBonus = totalHourlyBalance.length > 0 ? totalHourlyBalance[0].total * 0.1 : 0;

    // Обновляем баланс пользователя
    await User.findByIdAndUpdate(userId, { $inc: { balance: totalBonus } });

    // Обнуляем hourly_balance и hourly_clicks у всех рефералов пользователя
    await User.updateMany(
        { referrer_id: user._id },
        { $set: { hourly_balance: 0, hourly_clicks: 0 } }
    );

    // Отправляем обновленный баланс через WebSocket
    console.log('All open connections:');
    wss.clients.forEach(client => {
        console.log(`client.userId: ${client.userId}`);
        console.log(`client.readyState: ${client.readyState}`);
        console.log(`user.id: ${user.id}`);
    });
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.userId == user.id) {
            //console.log(`client.userId: ${client.userId} -------- user.id: ${user.id}`);
            client.send(JSON.stringify({
                type: 'referralBonus',
                balance: user.balance + totalBonus,
                bonus: totalBonus
            }));
        }
    });

    //console.log(`Referral balances updated for user with ID ${userId}.`);
};
