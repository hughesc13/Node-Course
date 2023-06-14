//client side

import { io } from 'socket.io-client';

const createSocketClient = (name, interval) => {
    const socket = io('http://localhost:8000/');

    socket.on('connect', () => {
        console.log(`${name} connected!`);

        setInterval(() => {
            // const randomNumber = Math.ceil(Math.random() * 100);//this generates randomNumber from 1 to 100 inclusive
            // socket.emit('newNumber', `Here's your random number: ${randomNumber}`);
            socket.emit('message', `Hello from ${name}!`);
        }, interval);//every interval milliseconds, client side generates randomNumber and sends it to server

    });

    socket.on('disconnect', () => {
        console.log(`${name} disconnected.`);
    });
}

createSocketClient('client server 1', 2000);
createSocketClient('Client server 2', 5000);