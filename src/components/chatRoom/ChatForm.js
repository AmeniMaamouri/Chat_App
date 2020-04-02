import React, { useState, useContext, useEffect } from 'react'
import { ChatContext } from '../../contexts/ChatContext'
import io from 'socket.io-client';
import { v1 } from 'uuid'
import moment from 'moment'
let socket;

const ChatForm = () => {


    const [msg, setMsg] = useState('')
    const { name } = useContext(ChatContext)
    socket = io('localhost:4000')

    const handleClick = (e) => {

        setMsg(e.target.value)


    }

    useEffect(() => {
        if (msg === ''){

            socket.emit('clear', 'clear')
    }
      
    }, [msg])


    const handleSubmit = (e) => {
        e.preventDefault();
       
        socket.emit('chatMsg', { msg, name, id: v1(), time: moment().calendar() })
        setMsg([])
       

    }

    const handleKeyPress = (e) => {
        socket.emit('typing', name)
    
    }


    return (



        <form onSubmit={handleSubmit} onKeyPress={handleKeyPress} id="chat-form">
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