import React from 'react';

const ChatMessage = () => {
	return (
		<div>
			<div className="message">
				<p className="meta">Brad <span>9:12pm</span></p>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
					repudiandae.
						</p>
			</div>
			<div className="message">
				<p className="meta">Mary <span>9:15pm</span></p>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
					repudiandae.
						</p>
			</div>
		</div>
	);
}

export default ChatMessage;