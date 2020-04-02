import React, { useContext, useEffect } from 'react';
import UsersList from './UsersList';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { ChatContext } from '../../contexts/ChatContext';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom'
import { v1 } from 'uuid'
let socket;

const ChatRoom = () => {

    const { room, name } = useContext(ChatContext);


    socket = io('http://localhost:4000/')

    useEffect(() => {
        window.addEventListener("beforeunload", () => {

            socket.emit('leftMessage', { name, id: v1() })
        });


    }, []);

    const handleClick = (e) => {

        socket.emit('leftMessage', { name, id: v1() })
    }

    return (
        <div>
            {name ? <div className="chat-container">
                <header className="chat-header">
                    <h1><i className="fas fa-smile"></i> Chat</h1>
                    <a onClick={handleClick} href="/" className="btn">Leave Room</a>
                </header>
                <main className="chat-main">
                    <div className="chat-sidebar">
                        <h3><i className="fas fa-comments"></i> </h3>
                        
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
            </div> : <Redirect to='/' />}

        </div>
    );
}

export default ChatRoom;