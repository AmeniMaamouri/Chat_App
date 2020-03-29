import React from 'react'

const ChatForm = () => {
    return (

        <form id="chat-form">
            <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
            />
            <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>


    );
}

export default ChatForm;