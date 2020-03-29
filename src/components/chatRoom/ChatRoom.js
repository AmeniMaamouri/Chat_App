import React from 'react';
import UsersList from './UsersList';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';

const ChatRoom = () => {
    return (

        <div class="chat-container">
            <header class="chat-header">
                <h1><i class="fas fa-smile"></i> ChatCord</h1>
                <a href="index.html" class="btn">Leave Room</a>
            </header>
            <main class="chat-main">
                <div class="chat-sidebar">
                    <h3><i class="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name">JavaScript</h2>
                    <h3><i class="fas fa-users"></i> Users</h3>
                    <ul id="users">
                        <UsersList />
                    </ul>
                </div>
                <div class="chat-messages">
                    <ChatMessage />
                </div>
            </main>
            <div class="chat-form-container">
                <ChatForm />
            </div>
        </div>


    );
}

export default ChatRoom;