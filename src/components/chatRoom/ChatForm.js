import React from 'react'

const ChatForm = () => {
    return (

        <form id="chat-form">
            <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autoComplete="off"
            />
            <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
        </form>


    );
}

export default ChatForm;