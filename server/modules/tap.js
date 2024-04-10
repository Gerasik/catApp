
const { User } = require('../modules/database');
exports.tap = async (ws, message) => {
    const { type, username } = JSON.parse(message);
    if (type === 'tap') {

        const user = await User.findOneAndUpdate(
            { username },
            {
                $inc: {
                    balance: 10,
                    hourly_balance: 10,
                    hourly_clicks: 1
                }
            },
            { new: true }
        );

        const balance = user ? user.balance : 0;
        const hourlyBalance = user ? user.hourly_balance : 0;
        const hourlyClicks = user ? user.hourly_clicks : 0;


        ws.send(JSON.stringify({ balance, hourlyBalance, hourlyClicks }));
    }
};
