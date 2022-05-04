import { Box, Text } from "@chakra-ui/react";
import React from "react";
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import SmallGallery from "../components/SmallGallery";
import useGetOwnPost from "../hooks/useGetOwnPost";
import useLocalStorage from "../hooks/useLocalStorage";

const ProfileBody = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useGetOwnPost(token);

	return (
		<Box display='flex' mt='5'>
			<Box flex='.4'>
				<Box bg='#222' color='white' p='4' borderRadius='10px'>
					<Box>
						<Text fontSize='2xl' fontWeight='bold'>
							Intro
						</Text>
						<Text mt='4' fontSize='xl' textAlign={["left", "center"]}>
							hello
						</Text>
					</Box>

					<Box mt='8'>
						<Text fontSize='2xl' fontWeight='bold'>
							photos
						</Text>
						<Box
							display='flex'
							flexWrap='wrap'
							justifyContent='center'
							alignItems='center'
						>
							{data?.data.slice(0, 10).map((data) => {
								return data.images.map((image) => {
									return <SmallGallery image={image} />;
								});
							})}
							{/* {data?.data.map((data) => {
								return data.images.map((image) => {
									return <SmallGallery image={image} />;
								});
							})} */}
						</Box>
					</Box>
				</Box>
			</Box>
			<Box flex='.6'>
				<InputBox />
				{data?.data.map((post) => (
					<div key={post._id}>
						<Post post={post} />
					</div>
				))}
			</Box>
		</Box>
	);
};

export default ProfileBody;
