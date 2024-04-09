const { User } = require('../modules/database');

exports.tap = async (ws, message) => {
    const { type, username } = JSON.parse(message);
    if (type === 'tap') {
        const user = await User.findOneAndUpdate({ username }, { $inc: { balance: 10 } }, { new: true });
        const balance = user ? user.balance : 0;
        ws.send(JSON.stringify({ balance }));
    }
};
