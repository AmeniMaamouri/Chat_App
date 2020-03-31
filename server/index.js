const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);



io.on('connection', socket => {
    

    socket.emit('welcomeChat', {msg: 'Welcome to the chat', name: 'Ameni Maamouri', id:0})

    socket.on('joinMessage', (name) => {
        io.emit('chat', {msg: `${name.name} has joined the chat`, name: '', id: name.id})
    })

    socket.on('leftMessage', (name) => {
        io.emit('chat', {msg : `${name.name} has left the chat`, name: '', id: name.id})
    })

    socket.on('chatMsg', (name) => {
        io.emit('chat', name)
    })


})

server.listen(4000 , () => console.log('Server is running on port 4000'));