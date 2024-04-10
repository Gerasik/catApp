const { User } = require('./database');

exports.getReferralList = async (ws, message) => {
    const data = JSON.parse(message);
    const { username } = data;
    const user = await User.findOne({ username: username });
    if (!user) {
        ws.send(JSON.stringify({ type: 'error', message: 'User not found' }));
        return;
    }
    const referrals = await User.find({ referrer_id: user._id }, 'username season_earnings balance');
    ws.send(JSON.stringify({ type: 'referralList', referrals: referrals }));
};
