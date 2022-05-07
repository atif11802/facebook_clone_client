import { Container, Box } from "@chakra-ui/react";
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
			<Box display='flex' flexWrap='wrap'>
				{data?.data?.friends.map((friend, i) => (
					<Box key={i} w='10' onClick={() => handleFriend(friend)}>
						{/* {friend.name} */}
						<Link to={`/profile/${friend._id}`}>{friend.name}</Link>
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default Friends;
