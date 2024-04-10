const { User } = require('./database');

exports.getLeaderboard = async (ws, message) => {
    const data = JSON.parse(message);
    const { username } = data;

    try {
        // Получаем топ-50 пользователей
        const users = await User.find({}, 'username balance').sort({ balance: -1 }).limit(50);

        // Проверяем, находится ли текущий пользователь в топ-50
        const userInLeaderboard = users.some(user => user.username === username);

        ws.send(JSON.stringify({ type: 'leaderboard', users: users, userInLeaderboard: userInLeaderboard }));
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        ws.send(JSON.stringify({ type: 'error', message: 'Failed to fetch leaderboard' }));
    }
};
