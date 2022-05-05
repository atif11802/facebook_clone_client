import { Container, Box } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";

const Friends = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useUserDetails(token);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Container maxW='5xl' color='#262626'>
			<Box class='box' display='flex' flexWrap='wrap'>
				{data?.data?.friends.map((friend) => (
					<Box class='box-item' key={friend._id} w='10'>
						<Link to={`/profile/${friend._id}`}>{friend.name}</Link>
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default Friends;
