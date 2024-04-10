const { User } = require('../modules/database');
const { updateReferralBalancesForUser } = require('./updateReferralBalanceForUser');

exports.updateReferralBalancesForAllUsers = async (wss) => {
    const users = await User.find();
    for (const user of users) {
        await updateReferralBalancesForUser(user._id, wss);
    }
    console.log('Referral balances updated for all users.');
};