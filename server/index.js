const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    
    socket.emit('message', 'Welcome to the chat room')
    socket.broadcast.emit('message', 'A user has joined the chat')

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
    })


})

server.listen(4000 , () => console.log('Server is running on port 4000'));