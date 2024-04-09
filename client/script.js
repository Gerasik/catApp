const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
    console.log('WebSocket connection opened');

    // Отправляем сообщение серверу при клике на кнопку
    document.getElementById('tap').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        if (!username) {
            alert('Please enter your username.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'tap', username }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });

    // Регистрация пользователя
    document.getElementById('register').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const referralCode = document.getElementById('referralCode').value;
        const password = document.getElementById('password').value; // Получение пароля

        if (!username || !password) {
            alert('Please enter your username and password.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'register', username, referralCode, password })); // Отправка пароля
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });


    document.getElementById('login').addEventListener('click', function () {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            alert('Please enter your username and password.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'login', username, password }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });

});

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    if (data.type === 'registerResponse') {
        if (data.success) {
            alert('Registration successful!');

        } else {
            alert('Registration failed. Please try again.');
        }
    } else if (data.balance !== undefined) {
        document.getElementById('balance').textContent = `Balance: ${data.balance}`;
    } else if (data.type === 'loginResponse') {
        if (data.success) {
            alert('Login successful!');
        } else {
            alert('Login failed. ' + (data.message || 'Please try again.'));
        }
    }
});

