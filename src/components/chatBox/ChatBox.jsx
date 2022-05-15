import React from "react";
import "./chatbox.css";
import { Avatar, Text } from "@chakra-ui/react";

const ChatBox = ({ user, friend, setShow }) => {
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
							<Avatar
								size='sm'
								name='Kent Dodds'
								src='https://bit.ly/kent-c-dodds'
							/>{" "}
						</div>
						<div className='chatbox-body-left-top-text'>
							<Text
								borderRadius='lg'
								p='5'
								fontSize='lg'
								width='50%'
								backgroundColor='#B2F5EA'
							>
								(lg) In
								ldddddddddddddddddddddddddddddocccccccccxxxcccccccccccccccccccve
								with React & Next
							</Text>
						</div>
					</div>
				</div>
				<div className='chatbox-body-right'>
					<div className='chatbox-body-right-top-text'>
						<Text
							fontSize='lg'
							width='90%'
							backgroundColor='#319795'
							p='5'
							borderRadius='lg'
						>
							(lg) In love wixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxth React
							&
							Nextaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
						</Text>
					</div>
					<div className='chatbox-body-right-top-img'>
						<Avatar
							size='sm'
							name='Kent Dodds'
							src='https://bit.ly/kent-c-dodds'
						/>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
