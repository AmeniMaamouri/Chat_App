import React,{createContext, useState} from 'react'


export const ChatContext = createContext()

const ChatContextProvider = (props) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('')
    const [msgTyping, setMsgTyping] = useState('')
   
    
    const setChat = (name, room) => {
        setName(name)
        setRoom(room)
    }


    return ( 
        <ChatContext.Provider value={{name, room, setChat, msgTyping, setMsgTyping}}>
            {props.children}
        </ChatContext.Provider>

     );
}
 
export default ChatContextProvider;