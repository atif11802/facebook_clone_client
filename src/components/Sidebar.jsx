import React, { useState } from "react";
import {
	Box,
	Center,
	Flex,
	Heading,
	Spacer,
	StackDivider,
	Text,
	VStack,
	WrapItem,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { BsMessenger, BsPeopleFill } from "react-icons/bs";
import { FaFlag, FaShoppingCart } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import { HiSpeakerphone } from "react-icons/hi";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";

const Sidebar = () => {
	const [seeMore, setSeeMore] = useState(false);
	const [token, setToken] = useLocalStorage("token", "");
	const {
		user: { _id },
	} = token;
	const { data, isLoading, isError } = useUserDetails(_id);

	return (
		<Box mt='2' flex='3'>
			<VStack
				divider={<StackDivider />}
				spacing={2}
				align='stretch'
				ml={4}
				mr={14}
				borderColor='gray.200'
				style={{
					width: "250px",
				}}
			>
				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<WrapItem>
						<Avatar
							size='sm'
							name='Dan Abrahmov'
							src={data?.data?.image?.res}
						/>
					</WrapItem>

					<Text fontSize='lg' pl={3}>
						Ratul
					</Text>
				</Box>
				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<BsPeopleFill size='25px' color={"#139CF8"} />
					<Text fontSize='lg' pl={3}>
						Friends
					</Text>
				</Box>

				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<BsMessenger size='25px' color={"#139CF8"} />
					<Text fontSize='lg' pl={3}>
						Messenger
					</Text>
				</Box>
				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<FaShoppingCart size='25px' color={"#139CF8"} />
					<Text fontSize='lg' pl={3}>
						Marketplace
					</Text>
				</Box>
				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<FaFlag size='25px' color={"#139CF8"} />
					<Text fontSize='lg' pl={3}>
						Saved
					</Text>
				</Box>
				<Box
					h='45px'
					d='flex'
					alignItems='center'
					_hover={{
						backgroundColor: "gray.100",
						cursor: "pointer",
					}}
					borderRadius='lg'
					pl={4}
				>
					<RiPagesFill size='25px' color={"#139CF8"} />
					<Text fontSize='lg' pl={3}>
						Pages
					</Text>
				</Box>
				{!seeMore && (
					<Box
						onClick={() => setSeeMore(true)}
						h='45px'
						d='flex'
						alignItems='center'
						_hover={{
							backgroundColor: "gray.100",
							cursor: "pointer",
						}}
						borderRadius='lg'
						pl={4}
					>
						<AiOutlineCaretDown size='25px' color={"#139CF8"} />
						<Text fontSize='lg' pl={3}>
							See more
						</Text>
					</Box>
				)}
				{seeMore && (
					<VStack
						divider={<StackDivider borderColor='gray.200' />}
						spacing={2}
						align='stretch'
					>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
						>
							<HiSpeakerphone size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								Ad Center
							</Text>
						</Box>
						<Box
							onClick={() => setSeeMore(false)}
							h='45px'
							d='flex'
							alignItems='center'
							_hover={{
								backgroundColor: "gray.100",
								cursor: "pointer",
							}}
							borderRadius='lg'
							pl={4}
							mt={2}
						>
							<TiArrowSortedUp size='25px' color={"#139CF8"} />
							<Text fontSize='lg' pl={3}>
								See less
							</Text>
						</Box>
					</VStack>
				)}
			</VStack>
		</Box>
	);
};

export default Sidebar;
