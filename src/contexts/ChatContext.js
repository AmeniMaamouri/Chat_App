import React,{createContext, useState} from 'react'


export const ChatContext = createContext()

const ChatContextProvider = (props) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('')
    
    const setChat = (name, room) => {
        setName(name)
        setRoom(room)
    }

    return ( 
        <ChatContext.Provider value={{name, room, setChat}}>
            {props.children}
        </ChatContext.Provider>

     );
}
 
export default ChatContextProvider;