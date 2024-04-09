const { User } = require('../modules/database');
const crypto = require('crypto');

exports.login = async (ws, message) => {
    const data = JSON.parse(message);
    if (data.type === 'login') {
        const { username, password } = data;

        // Находим пользователя по имени пользователя
        const user = await User.findOne({ username });

        if (!user) {
            // Если пользователь не найден, отправляем сообщение об ошибке
            ws.send(JSON.stringify({ type: 'loginResponse', success: false, message: 'User not found' }));
            return;
        }

        // Сравниваем хешированный пароль с паролем, хранящимся в базе данных
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        if (user.password !== hashedPassword) {
            // Если пароли не совпадают, отправляем сообщение об ошибке
            ws.send(JSON.stringify({ type: 'loginResponse', success: false, message: 'Invalid password' }));
            return;
        }

        ws.send(JSON.stringify({ type: 'loginResponse', success: true, username: user.username }));
    }
};
