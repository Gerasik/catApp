const socket = new WebSocket('ws://localhost:3000');
let currentUsername = null;

socket.addEventListener('open', function (event) {
    console.log('WebSocket connection opened');

    // Отправляем сообщение серверу при клике на кнопку
    document.getElementById('catClick').addEventListener('click', function () {
        console.log('currentUsername:', currentUsername);
        if (!currentUsername) {
            alert('Please log in first.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'tap', username: currentUsername }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });

    // Регистрация пользователя
    document.getElementById('register').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const referralCode = document.getElementById('referralCode').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please enter your username and password.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'register', username, referralCode, password }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });
    //Авторизация   
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
    //Получение реферального кода
    document.getElementById('requestReferralCode').addEventListener('click', function () {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'requestReferralCode', username: currentUsername }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });
    //Получение лидерборда
    document.getElementById('leaderboardList').addEventListener('click', function () {
        if (!currentUsername) {
            alert('Please log in first.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'getLeaderboard', username: currentUsername }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });

    //Получение списка рефералов
    document.getElementById('refList').addEventListener('click', function () {
        //console.log('currentUsername:', currentUsername);
        if (!currentUsername) {
            alert('Please log in first.');
            return;
        }
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'getReferralList', username: currentUsername }));
        } else {
            console.error('WebSocket is not open. State:', socket.readyState);
        }
    });

});

socket.addEventListener('message', function (event) {

    const data = JSON.parse(event.data);
    console.log('data', data);
    if (data.type === 'registerResponse') {
        if (data.success) {
            alert('Registration successful!');
        } else {
            alert('Registration failed. Please try again.');
        }
    }

    else if (data.type === 'loginResponse') {
        if (data.success) {
            alert('Login successful!');
            currentUsername = data.username;
            document.getElementById('cat-app').style.display = 'block';
            document.getElementById('container').textContent = `${data.balance}`;
            document.getElementById('requestReferralCode').style.display = 'block';
        } else {
            alert('Login failed. ' + (data.message || 'Please try again.'));
        }
    }

    else if (data.type === 'requestReferralCodeResponse') {
        if (data.success) {

            alert(`Ваш реферальный код: ${data.referralCode}`);
        } else {
            alert('Ошибка при получении реферального кода. Пожалуйста, попробуйте снова.');
        }
    }

    else if (data.type === 'referralList') {
        if (data.referrals) {
            data.referrals.forEach(referral => {
                const referralBonus = referral.balance * 0.1;
                console.log(`${referral.username} -->>> ${referralBonus}`);
            });
        } else {
            console.error('No referrals found.');
        }
    }

    else if (data.type === 'leaderboard') {
        let userFound = false;
        let userIndex = 0;
        data.users.forEach((user, index) => {
            if (user.username === currentUsername) {
                userFound = true;
                userIndex = index + 1; // Индекс начинается с 1
            }
            console.log(`${index + 1}. ${user.username} - ${user.balance} ${userFound && index === userIndex - 1 ? '--> true' : ''}`);
        });
    }

    if (data.type === 'referralBonus') {
        alert(`Начисленно за реферальную программу: ${data.bonus}`);
        document.getElementById('container').textContent = `${data.balance}`;
    }

    if (data.balance !== undefined) {
        document.getElementById('container').textContent = `${data.balance}`;
    }

});
