import React, { useState } from "react";
import {
	Avatar,
	Box,
	Container,
	Input,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Textarea,
	Button,
} from "@chakra-ui/react";
import { RiLiveFill } from "react-icons/ri";
import { FcStackOfPhotos } from "react-icons/fc";
import {
	BsFillEmojiLaughingFill,
	BsFillEmojiWinkFill,
	BsTagsFill,
} from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";
import { BsImages } from "react-icons/bs";
import useCreatePost from "../hooks/useCreatePost";
import { FaMapMarkerAlt } from "react-icons/fa";

const InputBox = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [token, setToken] = useLocalStorage("token", "");
	const [postbody, setPostbody] = useState("");
	const [images, setImages] = useState(null);

	const { mutate } = useCreatePost({ onClose, setPostbody, setImages });

	const handleSubmit = async () => {
		if (postbody || images) {
			await mutate({ images, postbody, token });
		}
	};

	const handleImage = (e) => {
		if (e.target.files.length > 0) {
			const image = e.target.files;
			setImages(image);
		}
	};

	return (
		<Container
			maxW='container.sm'
			border='1px'
			borderColor='gray.200'
			borderRadius='md'
			p='6'
		>
			<Box display='flex' alignItems='center'>
				<Avatar size='md' name='Kent Dodds' src={token?.user?.image?.res} />
				<Input
					ml={2}
					size='md'
					placeholder="what's on your mind"
					borderRadius='40px'
					onClick={onOpen}
				/>
			</Box>
			<Container
				maxW='container.sm'
				mt='5'
				display='flex'
				alignItems='center'
				justifyContent='space-between'
			>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					_hover={{
						cursor: "pointer",
					}}
				>
					<RiLiveFill size='30' color='teal' />
					<Text ml={2}>Live</Text>
				</Box>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					_hover={{
						cursor: "pointer",
					}}
					onClick={onOpen}
				>
					<FcStackOfPhotos size='30' color='teal' />
					<Text ml={2}>Photo/Video</Text>
				</Box>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					_hover={{
						cursor: "pointer",
					}}
				>
					<BsFillEmojiWinkFill size='30' color='teal' />
					<Text ml={2}>Feeling/Activity</Text>
				</Box>
			</Container>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay
					bg='blackAlpha.300'
					backdropFilter='blur(10px) hue-rotate(90deg)'
				/>
				<ModalContent>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Container maxW='container.sm'>
							<Box display='flex'>
								<Avatar
									size='sm'
									name='Ryan Florence'
									src='https://bit.ly/ryan-florence'
								/>
								<Text ml={2}> {token.user?.name}</Text>
							</Box>
						</Container>
						<Textarea
							mt={2}
							placeholder="what's on your mind"
							value={postbody}
							onChange={(e) => setPostbody(e.target.value)}
						/>
						<Box
							mt={2}
							border='1px'
							borderColor='gray.200'
							p={2}
							borderRadius='md'
							display='flex'
							justifyContent='space-evenly'
						>
							<Text>Add to Your Post</Text>
							<Box
								display='flex'
								alignItems='center'
								_hover={{
									cursor: "pointer",
								}}
							>
								<label
									htmlFor='input-file'
									style={{
										marginTop: "4px",
									}}
								>
									<BsImages size={25} ml={2} mr={2} />
								</label>
								<input
									multiple
									style={{ display: "none" }}
									id='input-file'
									type='file'
									_hover={{
										cursor: "pointer",
									}}
									onChange={handleImage}
								/>
								<BsTagsFill size={25} ml={2} mr={2} />
								<BsFillEmojiLaughingFill size={25} ml={2} mr={2} />
								<FaMapMarkerAlt size={25} />
							</Box>
						</Box>
					</ModalBody>
					<Button m={2} size='lg' colorScheme='facebook' onClick={handleSubmit}>
						<Text>Post</Text>
					</Button>
				</ModalContent>
			</Modal>
		</Container>
	);
};

export default InputBox;
