import React,{createContext, useState} from 'react'


export const ChatContext = createContext()

const ChatContextProvider = (props) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState([])
    
    const setChat = (name, room) => {
        setName(name)
        setRoom(room)
    }

    const addUser = (name) => {
        setUsers([...users, name])
    }

    return ( 
        <ChatContext.Provider value={{name, room, setChat, users, addUser}}>
            {props.children}
        </ChatContext.Provider>

     );
}
 
export default ChatContextProvider;