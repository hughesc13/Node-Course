//server side

import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.createServer(app);//wrap our express app... why
const io = socketIo(server);//wrap server lmao. io object allows us to determine how our server will respond when it receieves events?

io.on('connection', socket => {//socket is acting client. 
    console.log(`Connected to: ${socket.client.id}`);//displays clients unique id in console

    socket.on('message', data => {
        console.log(data);//data is what client side server emits
    });

    socket.on('disconnect', () => {
        console.log(`Disconnected from: ${socket.client.id}`);
    });
});//the callback we define takes socket as arg

server.listen(8000, () => {
    console.log('waiting for connections on port 8000.');
});