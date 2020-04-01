import React, { useState, useContext } from 'react'
import { ChatContext } from '../../contexts/ChatContext'
import io from 'socket.io-client';
import { v1 } from 'uuid'
import moment from 'moment'
let socket;

const ChatForm = () => {


    const [msg, setMsg] = useState('')
    const { name } = useContext(ChatContext)


    const handleClick = (e) => {

        setMsg(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        socket = io('localhost:4000')
        socket.emit('chatMsg', { msg, name, id: v1(), time: moment().calendar() })
        setMsg('')

    }


    return (



        <form onSubmit={handleSubmit} id="chat-form">
            <input
                onChange={handleClick}
                id="msg"
                type="text"
                value={msg}
                name="msg"
                placeholder="Enter Message"
                required
                autoComplete="off"
            />
            <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
        </form>


    );
}

export default ChatForm;