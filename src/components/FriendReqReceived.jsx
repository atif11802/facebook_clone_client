import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFriendReqAccept from "../hooks/useFriendReqAccept";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";

const FriendReqReceived = () => {
	const { userId } = useParams();
	const { data, isLoading, isError } = useUserDetails(userId);
	const [token, setToken] = useLocalStorage("token", "");
	const navigate = useNavigate();

	if (token.user._id !== data?.data?._id) {
		navigate("/");
	}

	const { mutate } = useFriendReqAccept();

	const handleFriend = (user) => {
		mutate({ userId: user, token });
	};

	return (
		<Container maxW='4xl' color='#262626'>
			<Box display='flex' flexWrap='wrap' mt='4'>
				{data?.data?.friendReqReceived.map((friend, i) => (
					<Box
						key={i}
						display='flex'
						mt='2'
						w='200px'
						justifyContent='space-between'
						alignItems='center'
						onClick={() => handleFriend(friend._id)}
						_hover={{
							cursor: "pointer",
						}}
					>
						<Box>
							<Image
								borderRadius='full'
								boxSize='50px'
								src={friend?.image?.res}
								alt={friend.name.toUpperCase()}
							/>
						</Box>
						<Box>
							<Text fontSize='md'>{friend.name.toUpperCase()}</Text>
							<Text fontSize='sm'>{friend.email}</Text>
						</Box>
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default FriendReqReceived;
