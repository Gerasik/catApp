const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const registerModule = require('./modules/register');
const tapModule = require('./modules/tap');
const loginModule = require('./modules/login');

const app = express();
const port = 3000;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);
        if (data.type === 'register') {
            registerModule.register(ws, message);
        } else if (data.type === 'tap') {
            tapModule.tap(ws, message);
        }
        else if (data.type === 'login') {
            loginModule.login(ws, message);
        }

    });
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
