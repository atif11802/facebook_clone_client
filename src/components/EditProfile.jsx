import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateProfile from "../hooks/useUpdateProfile";
import "./editProfile.css";

const EditProfile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [token, setToken] = useLocalStorage("token", "");
	const toast = useToast();

	const [value, setValue] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [images, setImages] = useState(null);
	const [cover, setCover] = useState(null);

	const handleImage = (e) => {
		if (e.target.files.length > 0) {
			const image = e.target.files;
			setImages(image);
		}
	};

	const handleCover = (e) => {
		if (e.target.files.length > 0) {
			const image = e.target.files;
			setCover(image);
		}
	};

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const { mutate } = useUpdateProfile(token, setImages, setCover);

	const handleSubmit = () => {
		if (
			value.name === "" &&
			value.email === "" &&
			value.password === "" &&
			value.confirmPassword === ""
		) {
			toast({
				title: "fill all the fields",
				status: "warning",
				duration: 4000,
				isClosable: true,
			});
			return;
		}
		if (value.password !== value.confirmPassword) {
			toast({
				title: "password doesn't match",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
			return;
		}

		mutate({ token, value, images, cover });
		onClose();
	};

	return (
		<div>
			<Button mt='4' colorScheme='cyan' w='100%' onClick={onOpen}>
				Edit Profile
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl>
							<FormLabel htmlFor='name'>Name</FormLabel>
							<Input
								id='name'
								onChange={handleChange}
								name='name'
								type='text'
								placeholder='Enter your name'
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='email'>Email</FormLabel>
							<Input
								name='email'
								onChange={handleChange}
								id='email'
								type='email'
								placeholder='Enter your email'
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='password'>Password</FormLabel>
							<Input
								name='password'
								onChange={handleChange}
								id='password'
								type='password'
								placeholder='Enter your password'
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='confirmpassword'>confirm Password</FormLabel>
							<Input
								onChange={handleChange}
								id='confirmpassword'
								type='password'
								name='confirmPassword'
								placeholder='Confirm your password'
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='Profile Picture'>Profile Picture</FormLabel>
							<div className='upload-btn-wrapper'>
								<button className='btn'>Upload Profile Picture</button>
								<input onChange={handleImage} type='file' name='myfile' />
							</div>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor='Profile Picture'>Cover Picture</FormLabel>
							<div className='upload-btn-wrapper'>
								<button className='btn'>Upload Cover Picture</button>
								<input onChange={handleCover} type='file' name='myfile' />
							</div>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant='ghost' onClick={handleSubmit}>
							Secondary Action
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default EditProfile;
