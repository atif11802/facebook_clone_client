import { Box, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Loader from "../components/Loader";
import Post from "../components/Post";
import useLocalStorage from "../hooks/useLocalStorage";
import usePosts from "../hooks/usePost";
import Story from "./Story";

const MainPage = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const navigate = useNavigate();

	const { data, isLoading, isError, error, isFetching } = usePosts(token);

	return (
		<Box mt='2' flex='5' maxW='container.sm'>
			<Story />
			<Container>
				<InputBox />
				{isLoading && <Loader />}
				{data?.data.map((post) => (
					<div key={post._id}>
						<Post post={post} />
					</div>
				))}
			</Container>
		</Box>
	);
};

export default MainPage;
