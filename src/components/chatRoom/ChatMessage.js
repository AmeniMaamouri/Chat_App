import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
let socket

const ChatMessage = () => {

	const [message, setMessage] = useState([])
	const messagesEndRef = useRef(null)

	socket = io('http://localhost:4000/')

	useEffect(() => {
		
		socket.on('chat', (information) => {
			setMessage([...message, information])
		})
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
	}, [message])

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

			<div ref={messagesEndRef} />

		</div>
	);
}

export default ChatMessage;