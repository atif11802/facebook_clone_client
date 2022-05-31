import React, { useEffect, useState } from "react";
import "./chatbox.css";
import { Avatar, Input, Text } from "@chakra-ui/react";
import useMakeChat from "../../hooks/useMakeChat";
import useSendChat from "../../hooks/useSendChat";
import useLocalStorage from "../../hooks/useLocalStorage";
import useGetMessages from "../../hooks/useGetMessages";
import useUserDetails from "../../hooks/useUserDetails";
import ScrollToBottom from "react-scroll-to-bottom";
import ScrollableFeed from "react-scrollable-feed";
import io from "socket.io-client";

let socket;

const ChatBox = ({ user, friend, setShow, chatData }) => {
	const [message, setMessage] = useState("");
	const [token, setToken] = useLocalStorage("token", "");
	const [messages, setMessages] = useState([]);

	const { data: userData } = useUserDetails(user);

	// console.log("chatdata", chatData?.data);
	const { data, isError, isLoading } = useGetMessages(
		chatData?.data?._id,
		token
	);

	// console.log(chatData?.data?._id);
	let ENDPOINT = "localhost:9000";
	const { mutate } = useSendChat(setMessage);

	useEffect(() => {
		socket = io(ENDPOINT);
		// console.log(chatData?.data?._id);
		if (chatData?.data?._id) {
			socket.emit(
				"join",
				{
					room: chatData?.data?._id,
					userId: user,
				},
				(error) => {
					if (error) {
						alert(error);
					}
				}
			);
		}
		console.log(socket.on);
		socket.on("msg", (message) => {
			console.log(message);
			setMessages((messages) => [...messages, { ...message }]);
		});

		return () => {
			socket.disconnect();
		};
	}, [chatData?.data?._id, friend._id, ENDPOINT]);

	// console.log(messages, data);
	useEffect(() => {
		if (data?.length > 0) {
			setMessages(data);
		}
	}, [data]);

	const sendMessage = (e) => {
		e.preventDefault();

		if (message.length === 0) {
			return;
		}

		mutate({
			token,
			chat: chatData?.data._id,
			message,
		});

		socket.emit("sendMessage", {
			message,
			sender: userData.data,
		});
	};
	// console.log(messages);

	return (
		<div className='chatbox'>
			<div className='chatbox-header'>
				<div className='chatbox-header-left'>
					<img
						src={friend?.image?.res}
						alt={friend?.name}
						className='chatbox-header-left-img'
					/>
					<h3>{friend.name}</h3>
				</div>
				<div className='chatbox-header-right'>
					<div
						className='chatbox-header-right-top'
						onClick={() => setShow(false)}
					>
						<h1>X</h1>
					</div>
				</div>
			</div>

			<div className='chatbox-body'>
				<ScrollableFeed>
					{messages?.map((message, i) => (
						<>
							{message.sender?._id !== user && (
								<div
									className='chatbox-body-left'
									style={{
										marginTop: "20px",
										width: "90%",
									}}
									key={i}
								>
									<div className='chatbox-body-left-top'>
										<div className='chatbox-body-left-top-img'>
											<Avatar
												size='sm'
												name='Kent Dodds'
												src={
													message.sender?.image?.res
														? message.sender.image.res
														: "https://bit.ly/kent-c-dodds"
												}
											/>{" "}
										</div>
										<div className='chatbox-body-left-top-text'>
											<Text
												borderRadius='lg'
												p='5'
												fontSize='lg'
												width='70%'
												backgroundColor='#B2F5EA'
											>
												{message.message}
											</Text>
										</div>
									</div>
								</div>
							)}
							{message.sender._id === user && (
								<div
									className='chatbox-body-right'
									style={{
										marginTop: "20px",
									}}
								>
									<div className='chatbox-body-right-top-text'>
										{message.sender._id === user && (
											<Text
												borderRadius='lg'
												p='5'
												fontSize='lg'
												width='80%'
												backgroundColor='#B2F5EA'
											>
												{message.message}
											</Text>
										)}
									</div>
									<div className='chatbox-body-right-top-img'>
										<Avatar
											size='sm'
											name='Kent Dodds'
											src={
												message.sender?.image?.res
													? message.sender.image.res
													: "https://bit.ly/kent-c-dodds"
											}
										/>{" "}
									</div>
								</div>
							)}
						</>
					))}
				</ScrollableFeed>
			</div>

			<div className='chatbox-footer'>
				<Input
					placeholder='Basic usage'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyUp={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
				/>
			</div>
		</div>
	);
};

export default ChatBox;
