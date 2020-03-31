import React,{useContext, useEffect} from 'react';
import UsersList from './UsersList';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { ChatContext } from '../../contexts/ChatContext';
import io from 'socket.io-client';
let socket;

const ChatRoom = () => {

    const {room} = useContext(ChatContext);
  

   useEffect(() => {
       socket = io('localhost:4000')
       socket.on('message', message => {
           console.log(message)
       })
});

    return (

        <div className="chat-container">
            <header className="chat-header">
                <h1><i className="fas fa-smile"></i> Chat</h1>
                <a href="/" className="btn">Leave Room</a>
            </header>
            <main className="chat-main">
                <div className="chat-sidebar">
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name">{room}</h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users">
                        <UsersList />
                    </ul>
                </div>
                <div className="chat-messages">
                    <ChatMessage />
                </div>
            </main>
            <div className="chat-form-container">
                <ChatForm />
            </div>
        </div>


    );
}

export default ChatRoom;