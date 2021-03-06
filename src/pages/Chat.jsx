import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatBox from "../components/chatBox/ChatBox";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import { useSelector, useDispatch } from "react-redux";
import { showChat } from "../actions/index";
import useMakeChat from "../hooks/useMakeChat";

const Chat = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useUserDetails(token.user._id);
	const [show, setShow] = useState(false);
	const [friend, setFriend] = useState(null);

	const dispatch = useDispatch();

	const { mutate, data: makechatData } = useMakeChat();

	const handleMakeChat = (user) => {
		setShow(true);

		setFriend(user);
		// console.log(user._id);

		mutate({
			token,
			participants: [user._id, token.user._id],
			isGroup: false,
		});
	};

	return (
		<Box mt='2' flex='3'>
			<Text fontSize='xl'>Contacts</Text>
			{isLoading && "Loading..."}
			{isError && "Error..."}
			{data?.data?.friends.map((friend, i) => (
				<>
					<Box
						key={i}
						mt={2}
						display='flex'
						alignItems='center'
						onClick={() => handleMakeChat(friend)}
						_hover={{
							cursor: "pointer",
						}}
						backgroundColor='#f5f5f5'
						padding='6px'
						borderRadius='full'
					>
						<Box flex='3'>
							{friend?.image?.res && (
								<Image
									borderRadius='full'
									boxSize='43px'
									src={friend?.image?.res}
									alt={friend.name.toUpperCase()}
								/>
							)}
						</Box>
						<Box flex='7'>
							<Text fontSize='md'>{friend.name.toUpperCase()}</Text>
						</Box>
					</Box>
				</>
			))}
			{show && (
				<ChatBox
					friend={friend}
					user={token.user._id}
					setShow={setShow}
					chatData={makechatData}
				/>
			)}
		</Box>
	);
};

export default Chat;
