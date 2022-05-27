import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Loader from "../components/Loader";
import Post from "../components/Post";
import useLocalStorage from "../hooks/useLocalStorage";
import usePosts from "../hooks/usePost";
import useUserDetails from "../hooks/useUserDetails";

const MainPage = () => {
	const [token, setToken] = useLocalStorage("token", "");

	const navigate = useNavigate();
	const {
		data: userdata,
		isLoading: userdataLoading,
		isError: userdataError,
	} = useUserDetails(token.user._id);
	const [run, setRun] = useState(false);

	const friendsId = userdata?.data?.friends.map((friend) => friend._id);

	const { data, isLoading, isError, error, isFetching, refetch } = usePosts({
		token,
		friendsId,
	});

	return (
		<Box mt='2' flex='5' maxW='container.sm'>
			<Container>
				<InputBox />
				{isLoading && <Loader />}
				{data?.data.map((post, i) => (
					<div key={i}>
						<Post post={post} />
					</div>
				))}
			</Container>
		</Box>
	);
};

export default MainPage;
