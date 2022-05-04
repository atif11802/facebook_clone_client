import { Box, Text, Input, Button, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import SmallGallery from "../components/SmallGallery";
import useAbout from "../hooks/useAbout";
import useGetOwnPost from "../hooks/useGetOwnPost";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";

const ProfileBody = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useGetOwnPost(token);
	const [isAboutEdited, setIsAboutEdited] = useState(false);
	const [about, setAbout] = useState("");

	const { _id } = token.user;

	const { data: userData, isLoading: userLoading } = useUserDetails(_id, token);

	const { token: localToken, user } = token;

	const {
		mutate,
		data: aboutData,
		isLoading: mutateLoading,
	} = useAbout(setIsAboutEdited, token, setToken, setAbout);

	const handleAbout = () => {
		if (about.length > 0) {
			mutate({ about, token });
		}
	};

	return (
		<Box display='flex' mt='5'>
			<Box flex='.4'>
				<Box bg='#222' color='white' p='4' borderRadius='10px'>
					<Box>
						<Text fontSize='2xl' fontWeight='bold'>
							Intro
						</Text>

						{!isAboutEdited ? (
							<Text mt='4' fontSize='xl' textAlign={["left", "center"]}>
								{userData?.data.about && userData.data.about}
							</Text>
						) : (
							<Stack mt='2'>
								<Input
									mt='4'
									fontSize='xl'
									textAlign={["left", "center"]}
									placeholder='medium size'
									size='md'
									height='120px'
									value={about}
									onChange={(e) => setAbout(e.target.value)}
								/>
								<Box display='flex' justifyContent='flex-end'>
									<Button
										colorScheme='red'
										mr='2'
										onClick={() => setIsAboutEdited(false)}
									>
										<Text fontSize='xl'>cancel</Text>
									</Button>
									<Button colorScheme='facebook' onClick={handleAbout}>
										<Text fontSize='xl'>Save</Text>
									</Button>
								</Box>
							</Stack>
						)}
						{!isAboutEdited && (
							<Button
								mt='3'
								w='100%'
								colorScheme='facebook'
								onClick={() => setIsAboutEdited(true)}
							>
								Edit Bio?
							</Button>
						)}
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
								return data.images.map((image, i) => {
									return <SmallGallery key={i} image={image} />;
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
