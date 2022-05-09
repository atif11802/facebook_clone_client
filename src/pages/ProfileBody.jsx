import {
	Box,
	Button,
	Container,
	Text,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import SmallGallery from "../components/SmallGallery";
import useAbout from "../hooks/useAbout";
import useGetOwnPost from "../hooks/useGetOwnPost";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import EditProfile from "../components/EditProfile";
import useSendFriendReq from "../hooks/useSendFriendReq";

const ProfileBody = () => {
	const { userId } = useParams();
	const [token, setToken] = useLocalStorage("token", "");
	const [isAboutEdited, setIsAboutEdited] = useState(false);
	const [about, setAbout] = useState("");

	const { data, isLoading, isError } = useGetOwnPost(userId, token);
	const {
		data: userdata,
		isLoading: userdataLoading,
		isError: userdataError,
	} = useUserDetails(userId);

	const { mutate } = useAbout(setIsAboutEdited, setAbout);

	const handleAbout = () => {
		if (about !== "") {
			mutate({ about, token });
		}
	};

	const { mutate: reqMutate } = useSendFriendReq();

	const handleSendFriendReq = () => {
		reqMutate({ userId, token });
	};

	const isFriendreqRec = userdata?.data?.friendReqReceived?.find(
		(x) => x._id === token.user._id
	);

	const isFriendreqSent = userdata?.data?.friendReqSent?.find(
		(x) => x._id === token.user._id
	);

	const isFriend = userdata?.data?.friends?.find(
		(x) => x._id === token.user._id
	);

	return (
		<Container maxW='5xl' color='#262626' mt='3' display='flex'>
			<Box
				backgroundColor='#262626'
				color='white'
				flex='4'
				height={["100%", "100%", "100%", "100%", "100%"]}
				borderRadius='10px'
			>
				{token.user._id !== userdata?.data?._id &&
					!isFriendreqRec &&
					!isFriendreqSent &&
					!isFriend && (
						<Box p='4'>
							<Text fontSize='xl'>
								Send Friend Request to {userdata?.data?.name}
							</Text>
							<Button
								onClick={handleSendFriendReq}
								colorScheme='green'
								size='lg'
								width='100%'
								mt='3'
							>
								<Text fontSize='xl'>Send</Text>
							</Button>
						</Box>
					)}

				{isFriendreqRec && (
					<Box p='4'>
						<Text fontSize='xl'>
							you sent a friend request to {userdata?.data?.name}
						</Text>
					</Box>
				)}
				{token.user._id === userdata?.data?._id && (
					<Box p='4'>
						<Text fontSize='xl'>Edit Profile</Text>
						<EditProfile />
					</Box>
				)}

				<Box p='4'>
					<Text fontSize='xl'>Intro</Text>
					{!isAboutEdited && (
						<Text pt='3' fontSize='md' align='center'>
							{userdata?.data?.about}
						</Text>
					)}
					{!isAboutEdited && token.user._id === userdata?.data?._id && (
						<>
							{/* <Text pt='3' fontSize='md' align='center'>
								{userdata?.data?.about}
							</Text> */}
							<Button
								onClick={() => setIsAboutEdited(true)}
								mt='4'
								colorScheme='facebook'
								w='100%'
							>
								Edit
							</Button>
						</>
					)}
					{isAboutEdited && (
						<>
							<Input
								mt='4'
								placeholder={userdata?.data?.about}
								size='lg'
								value={about}
								onChange={(e) => setAbout(e.target.value)}
							/>
							<Box display='flex' justifyContent='flex-end' mt={"4"}>
								<Button
									colorScheme={"red"}
									mr='2'
									onClick={() => setIsAboutEdited(false)}
								>
									<Text>Cancel</Text>
								</Button>
								<Button colorScheme={"messenger"} onClick={handleAbout}>
									<Text>Save</Text>
								</Button>
							</Box>
						</>
					)}
				</Box>
				<Box p='3'>
					<Text fontSize='xl'>Photos</Text>

					<Box
						mt='2'
						display='flex'
						flexWrap='wrap'
						justifyContent='center'
						alignItems='center'
					>
						{data?.data.slice(0, 6).map((post) =>
							post.images
								// .slice(0, 1)
								.map((image) => <SmallGallery key={image._id} image={image} />)
						)}
					</Box>
				</Box>
			</Box>
			<Box flex='6'>
				{token.user._id === userdata?.data?._id && <InputBox />}

				{data?.data?.map((post, i) => (
					<Post post={post} key={i} />
				))}
			</Box>
		</Container>
	);
};

export default ProfileBody;
