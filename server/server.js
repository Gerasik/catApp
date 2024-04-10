const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const registerModule = require('./modules/register');
const tapModule = require('./modules/tap');
const loginModule = require('./modules/login');
const getRefModule = require('./modules/getRef');
const { updateReferralBalancesForAllUsers } = require('./modules/referrals');

const app = express();
const port = 3000;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function checkTimeAndUpdateReferrals() {
    const now = new Date();
    console.log(`Current time: ${now}`);
    // Проверяем, является ли текущее время кратным часу
    if (true) {
        // Вызываем функцию обновления реферальных начислений для всех пользователей
        updateReferralBalancesForAllUsers(wss);
    }
}

// Запускаем проверку каждую минуту
setInterval(checkTimeAndUpdateReferrals, 60000);

// Структура для отслеживания последнего соединения каждого пользователя
const userLastConnection = {};

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);
        if (data.type === 'register') {
            registerModule.register(ws, message);
        } else if (data.type === 'tap') {
            tapModule.tap(ws, message);
        } else if (data.type === 'login') {
            loginModule.login(ws, message);
        } else if (data.type === 'requestReferralCode') { // Обрабатываем запрос реферального кода
            getRefModule.requestReferralCode(ws, message);
        }
    });

    // При подключении нового соединения
    ws.on('open', () => {
        // Если пользователь уже подключен, закрываем предыдущее соединение
        if (userLastConnection[ws.userId]) {
            userLastConnection[ws.userId].close();
        }
        // Сохраняем новое соединение как последнее для пользователя
        userLastConnection[ws.userId] = ws;
    });

    ws.on('close', () => {
        // Удаляем закрытое соединение из отслеживания
        if (userLastConnection[ws.userId] === ws) {
            delete userLastConnection[ws.userId];
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
