import React, { useEffect, useState, useRef,useContext } from 'react';
import io from 'socket.io-client';
import {ChatContext} from '../../contexts/ChatContext'
let socket

const ChatMessage = () => {

	const [message, setMessage] = useState([])
	const {msgTyping, setMsgTyping, name} = useContext(ChatContext)
	const messagesEndRef = useRef(null)

	socket = io('http://localhost:4000')

	useEffect(() => {
		
		socket.on('chat', (information) => {
			setMsgTyping('')
			setMessage([...message, information])
		})
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
	})



	useEffect(() => {

	socket.on('chatTyping', (msg) => {
		if(msg.name !== name){
			setMsgTyping(msg.msg)
		}
		
	})

	socket.on('clear', (msg) => {
		
			setMsgTyping('')
		
		
	})

	},[])
	

	useEffect(() => {
		
		socket.once('welcomeChat', (information) => {
			setMessage([...message, information])
		})
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
	}, [])

	return (
		<div>
			{message && message.map(msg => {
				return (
					<div className="message" key={msg.id}>
						<p className="meta">{msg.name} <span>{msg.time}</span></p>
						<p className="text">
							{msg.msg}
						</p>
					</div>
				)
			})}
				<p><em>{msgTyping && msgTyping}</em></p>
			<div ref={messagesEndRef} />
			
		</div>
	);
}

export default ChatMessage;