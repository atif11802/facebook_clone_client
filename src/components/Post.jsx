import React, { useEffect } from "react";
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
	Image,
	Flex,
	Button,
} from "@chakra-ui/react";
import moment from "moment";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import useLocalStorage from "../hooks/useLocalStorage";
import useLike from "../hooks/useLike";
import { useState } from "react";
import ImageGallery from "./ImageGallery";
import Comment from "./Comment";
import Allcomments from "./Allcomments";

const Post = ({ post }) => {
	const { body, images, updatedAt, postedBy, _id, likes, comments } = post;
	const [token, setToken] = useLocalStorage("token", "");
	const [isLiked, setIsLiked] = useState();

	const { mutate } = useLike();
	const handleLike = () => {
		{
			mutate({ postId: _id, token });
		}
	};

	useEffect(() => {
		setIsLiked(likes.find((like) => like === token.user._id));
	}, [likes, post]);

	return (
		<Center py={2}>
			<Box
				maxW={"445px"}
				w={"full"}
				// bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				rounded={"md"}
				p={6}
				overflow={"hidden"}
			>
				<Stack mt={2} direction={"row"} spacing={4} align={"center"}>
					<Avatar
						src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
						alt={"Author"}
					/>
					<Stack direction={"column"} spacing={0} fontSize={"sm"}>
						<Text fontWeight={600}>{postedBy.name}</Text>
						<Text color={"gray.500"}>{moment(updatedAt).fromNow()}</Text>
					</Stack>
				</Stack>
				<Stack mt='15'>
					<Text color={"gray.500"}>{body}</Text>
				</Stack>
				<Stack mb={0}>
					{images.length > 0 && (
						<Box bg={"gray.100"} mt={2} mx={-6} position={"relative"}>
							{images.length === 1 && (
								<Image src={images[0].res} alt={"Post"} layout={"fill"} />
							)}

							{images.length > 1 && <ImageGallery images={images} />}
						</Box>
					)}
				</Stack>

				<Flex justifyContent='space-between' mt={4} alignItems='center'>
					<Box
						display='flex'
						alignItems='center'
						_hover={{
							cursor: "pointer",
							backgroundColor: "gray.100",
							width: "100%",
						}}
						flex='1'
						justifyContent='center'
						p={2}
						borderRadius='md'
						onClick={handleLike}
					>
						{isLiked?.length > 0 ? (
							<AiFillLike size={30} />
						) : (
							<AiOutlineLike size={30} />
						)}{" "}
						{likes.length}
						<Text ml={2} color={"gray.500"}>
							Like
						</Text>
					</Box>
					<Box
						flex='1'
						display='flex'
						alignItems='center'
						_hover={{
							cursor: "pointer",
							backgroundColor: "gray.100",
							width: "100%",
						}}
						justifyContent='center'
						p={2}
						borderRadius='md'
					>
						<BiComment size={30} />
						<Text ml={2} color={"gray.500"}>
							Comment
						</Text>
					</Box>
					<Box
						p={2}
						flex='1'
						display='flex'
						alignItems='center'
						_hover={{
							cursor: "pointer",
							backgroundColor: "gray.100",
							width: "100%",
						}}
						justifyContent='center'
						borderRadius='md'
					>
						<RiShareForwardLine size={30} />
						<Text ml={2} color={"gray.500"}>
							Comment
						</Text>
					</Box>
				</Flex>
				<Comment _id={_id} />
				{comments.length > 0 &&
					comments.map((comment, i) => (
						<Allcomments key={i} comment={comment} />
					))}
			</Box>
		</Center>
	);
};

export default Post;
