const mongoose = require('mongoose');

// Подключение к MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/catClickerDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Определение схемы для пользователя
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    offlineIncome: {
        type: Number,
        default: 0
    },
    hourly_balance: {
        type: Number,
        default: 0
    },
    hourly_clicks: {
        type: Number,
        default: 0
    },
    referral_code: {
        type: String,
        unique: true
    },
    referrer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    referred_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    referrals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    clicks: {
        type: Number,
        default: 0
    },
    last_hour_update: {
        type: Date,
        default: Date.now
    }
});
// Создание модели пользователя
const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
