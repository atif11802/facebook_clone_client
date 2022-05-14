import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import {
	Box,
	Input,
	WrapItem,
	Avatar,
	Button,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	VStack,
	InputGroup,
	Icon,
	InputRightElement,
} from "@chakra-ui/react";
import { MdHome, MdPeopleAlt, MdShoppingBag } from "react-icons/md";
import { IoIosPeople, IoMdArrowDropdown } from "react-icons/io";
import { RiGamepadFill, RiMenu4Line } from "react-icons/ri";
import { BsMessenger, BsBell } from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import useUserDetails from "../hooks/useUserDetails";
import { SearchIcon } from "@chakra-ui/icons";
import useFrndSearch from "../hooks/useFrndSearch";

const Navbar = () => {
	const [token, setToken] = useLocalStorage("token", "");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = useState("");
	const [users, setUsers] = useState([]);

	const {
		user: { _id },
	} = token;

	const { mutate, isLoading: searchLoading } = useFrndSearch(setUsers);

	const { data, isLoading, isError } = useUserDetails(_id);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error...</div>;
	}

	const handleSearch = () => {
		mutate({ token, name: name });
	};

	return (
		<div className='row border-bottom p-2'>
			<div className='col-sm-3'>
				<Box display='flex' alignItems='center' justifyContent='space-between'>
					<Link to='/'>
						<BsFacebook color='#139CF8' size={40} />
					</Link>

					<Input
						onClick={onOpen}
						borderRadius={50}
						m={2}
						placeholder='Search Facebook'
						size='md'
					/>
				</Box>
			</div>
			<div className='col-sm-6 '>
				<Box
					display='flex'
					alignItems='center'
					maxW='lg'
					pt={2}
					justifyContent='space-between'
				>
					<Link to='/'>
						<Box
							_hover={{
								background: "#999",
								cursor: "pointer",
							}}
							pt={2}
							pb={2}
							pl={4}
							pr={4}
							borderRadius='xl'
							backgroundColor='#EDF2F7'
						>
							<MdHome color='#139CF8' size={32} />
						</Box>
					</Link>

					<Box
						_hover={{
							background: "#999",
							cursor: "pointer",
						}}
						pt={2}
						pb={2}
						pl={4}
						pr={4}
						borderRadius='xl'
						backgroundColor='#EDF2F7'
					>
						<MdPeopleAlt color='#139CF8' size={32} />
					</Box>
					<Box
						_hover={{
							background: "#999",
							cursor: "pointer",
						}}
						pt={2}
						pb={2}
						pl={4}
						pr={4}
						borderRadius='xl'
						backgroundColor='#EDF2F7'
					>
						<MdShoppingBag color='#139CF8' size={32} />
					</Box>

					<Box
						_hover={{
							background: "#999",
							cursor: "pointer",
						}}
						pt={2}
						pb={2}
						pl={4}
						pr={4}
						borderRadius='xl'
						backgroundColor='#EDF2F7'
					>
						<IoIosPeople color='#139CF8' size={32} />
					</Box>
					<Box
						_hover={{
							background: "#999",
							cursor: "pointer",
						}}
						pt={2}
						pb={2}
						pl={4}
						pr={4}
						borderRadius='xl'
						backgroundColor='#EDF2F7'
					>
						<RiGamepadFill color='#139CF8' size={32} />
					</Box>
				</Box>
			</div>
			<div className='col-sm-3'>
				<Box
					display='flex'
					alignItems='center'
					maxW='sm'
					pt={2}
					justifyContent='space-between'
				>
					<Link
						to={`/profile/${token.user?._id}`}
						style={{ textDecoration: "none" }}
					>
						<WrapItem display='flex' alignItems='center'>
							<Avatar
								size='sm'
								name={data?.data?.name}
								src={data?.data?.image?.res}
							/>
							<Text ml={2}>{data?.data?.name}</Text>
						</WrapItem>
					</Link>

					<RiMenu4Line color='#139CF8' size={22} />
					<BsMessenger color='#139CF8' size={22} />
					<BsBell color='#139CF8' size={22} />
					<IoMdArrowDropdown color='#139CF8' size={22} />
				</Box>
			</div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>make friends by searching</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack align='stretch'>
							<InputGroup size='md'>
								<Input
									pr='4.5rem'
									placeholder='search facebook'
									onChange={(e) => setName(e.target.value)}
								/>
								<InputRightElement width='4.5rem'>
									<SearchIcon
										w={6}
										h={6}
										_hover={{
											cursor: "pointer",
										}}
										color='red.500'
										onClick={handleSearch}
									/>
								</InputRightElement>
							</InputGroup>
							<Box maxH='200px' overflowY='scroll'>
								{searchLoading
									? "loading..."
									: users.map((user, index) => (
											<Link to={`/profile/${user._id}`}>
												<Box
													key={index}
													display='flex'
													alignItems='center'
													mt='2'
													mb='2'
												>
													<Box>
														<Avatar
															size='sm'
															name={user.name}
															src={user.image.res}
														/>
													</Box>
													<Box ml='3'>
														<Text>{user.name}</Text>
														{data.data._id === user._id && (
															<Text>It's You</Text>
														)}
													</Box>
												</Box>
											</Link>
									  ))}
							</Box>
						</VStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default Navbar;
