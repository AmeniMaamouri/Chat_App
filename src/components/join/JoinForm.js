import React,{useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { ChatContext } from '../../contexts/ChatContext';

const JoinForm = () => {

    const {setChat} = useContext(ChatContext);
    const history = useHistory()
    const [name, setName] = useState('')
    const [room, setRoom] = useState('JavaScript')


    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeSelect = (e) => {
        setRoom(e.target.value)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setChat(name,room)
       history.push('/inbox')
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    onChange={handleChangeName}
                    name="username"
                    id="username"
                    placeholder="Enter username..."
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="room">Room</label>
                <select onChange={handleChangeSelect} name="room" id="room">
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                    <option value="C#">C#</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Java">Java</option>
                </select>
            </div>
            <button type="submit" className="btn">Join Chat</button>
        </form>


    );
}

export default JoinForm;