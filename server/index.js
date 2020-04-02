const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const uuidv1 = require('uuid')
var moment = require('moment');
let names = [];



io.on('connection', socket => {
    

    io.sockets.emit('welcomeChat', {msg: 'Welcome to the chat !', name: 'Ameni Maamouri', id: uuidv1, time: moment().calendar()})

    socket.on('joinMessage', (name) => {
         io.emit('chat', {msg: `${name.name} has joined the chat`, name: '', id: name.id, time:''})
     

       
    })

    socket.on('userName', (name) => {

        names.push(name)
       
        io.emit('userList', names)
    })

    socket.on('leftMessage', (name) => {
        io.emit('chat', {msg : `${name.name} has left the chat`, name: '', id: name.id, time:''})
       const users = names.filter((user) => user.name !== name.name)
       names = users
         io.emit('userList', names)
      
    })

    socket.on('chatMsg', (name) => {
        io.emit('chat', name)
    })


    socket.on('typing', (name) => {
        
   
        io.emit('chatTyping', {msg: `${name} is typing a message...`, name})

    })

    socket.on('clear', txt => {
        
    
            io.emit('clear', txt)
    
        })

})



server.listen(4000 , () => console.log('Server is running on port 4000'));