import React from "react";
import "./chatbox.css";

const ChatBox = ({ user, friend }) => {
	console.log(user, friend);
	return (
		<div className='chatbox'>
			<div className='chatbox-header'>
				<div className='chatbox-header-left'>
					<img
						src={friend.image.res}
						alt={friend.name}
						className='chatbox-header-left-img'
					/>
					<h3>{friend.name}</h3>
				</div>
				<div className='chatbox-header-right'>
					<div className='chatbox-header-right-top'></div>
				</div>
			</div>
			<div className='chatbox-body'>
				<div className='chatbox-body-left'>
					<div className='chatbox-body-left-top'>
						<div className='chatbox-body-left-top-img'>
							<img src='http://placehold.it/50x50' alt='user' />
						</div>
						<div className='chatbox-body-left-top-text'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicings</p>
						</div>
					</div>
				</div>
				<div className='chatbox-body-right'>
					<div className='chatbox-body-right-top'>
						<div className='chatbox-body-right-top-img'>
							<img src='http://placehold.it/50x50' alt='user' />
						</div>
						<div className='chatbox-body-right-top-text'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicings</p>
						</div>
					</div>
					<div className='chatbox-body-right-bottom'>
						<div className='chatbox-body-right-bottom-img'>
							<img src='http://placehold.it/50x50' alt='user' />
						</div>
						<div className='chatbox-body-right-bottom-text'>
							<p>Lorem ipsum dolor sit amet consectetur adipisicings</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
