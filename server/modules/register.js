const { User } = require('../modules/database');
const crypto = require('crypto');

exports.register = async (ws, message) => {
    const data = JSON.parse(message);
    if (data.type === 'register') {
        const { username, referralCode, password } = data;
        let referrer = null;

        if (referralCode) {
            referrer = await User.findOne({ referral_code: referralCode });
            if (!referrer) {
                ws.send(JSON.stringify({ type: 'registerResponse', success: false, message: 'Invalid referral code' }));
                return;
            }
        }

        // Пример хеширования пароля перед сохранением
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

        const newUser = new User({
            username,
            balance: 0,
            password: hashedPassword, // Сохраняем хешированный пароль
            referral_code: crypto.randomBytes(16).toString('hex'),
            referrer_id: referrer ? referrer._id : null,
            referred_by: referrer ? referrer._id : null
        });

        await newUser.save();

        if (referrer) {
            referrer.referrals += 1;
            await referrer.save();
        }

        ws.send(JSON.stringify({ type: 'registerResponse', success: true, message: 'User registered' }));
    }
};
