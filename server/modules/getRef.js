const { User } = require('../modules/database');

exports.requestReferralCode = async (ws, message) => {
    const data = JSON.parse(message);
    if (data.type === 'requestReferralCode') {
        const { username } = data;

        // Находим пользователя по имени пользователя
        const user = await User.findOne({ username });

        if (!user) {
            ws.send(JSON.stringify({ type: 'requestReferralCodeResponse', success: false, message: 'User not found' }));
            return;
        }

        // Отправляем реферальный код пользователя
        ws.send(JSON.stringify({ type: 'requestReferralCodeResponse', success: true, referralCode: user.referral_code }));
    }
};
