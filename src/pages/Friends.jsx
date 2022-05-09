import { Container, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import { useQueryClient } from "react-query";

const Friends = () => {
	const { userId } = useParams();

	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useUserDetails(userId);

	const queryClient = useQueryClient();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const handleFriend = (user) => {
		queryClient.invalidateQueries("userDetails");
	};

	return (
		<Container maxW='5xl' color='#262626'>
			<Box display='flex' flexWrap='wrap' mt='4'>
				{data?.data?.friends.map((friend, i) => (
					<Link to={`/profile/${friend._id}`}>
						<Box
							key={i}
							display='flex'
							mt='2'
							w='200px'
							justifyContent='space-between'
							alignItems='center'
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
					</Link>
				))}
			</Box>
		</Container>
	);
};

export default Friends;
