import React from "react";
import { BsFacebook } from "react-icons/bs";
import { Box, Input, WrapItem, Avatar, Button, Text } from "@chakra-ui/react";
import { MdHome, MdPeopleAlt, MdShoppingBag } from "react-icons/md";
import { IoIosPeople, IoMdArrowDropdown } from "react-icons/io";
import { RiGamepadFill, RiMenu4Line } from "react-icons/ri";
import { BsMessenger, BsBell } from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [token, setToken] = useLocalStorage("token", "");

	return (
		<div className='row border-bottom p-2'>
			<div className='col-sm-3'>
				<Box display='flex' alignItems='center' justifyContent='space-between'>
					<Link to='/'>
						<BsFacebook color='#139CF8' size={40} />
					</Link>

					<Input
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
						to={`/profile/${token.user._id}`}
						style={{ textDecoration: "none" }}
					>
						<WrapItem display='flex' alignItems='center'>
							<Avatar
								size='sm'
								name={token?.user.name}
								src={token?.user.image.res}
							/>
							<Text ml={2}>{token?.user.name}</Text>
						</WrapItem>
					</Link>

					<RiMenu4Line color='#139CF8' size={22} />
					<BsMessenger color='#139CF8' size={22} />
					<BsBell color='#139CF8' size={22} />
					<IoMdArrowDropdown color='#139CF8' size={22} />
				</Box>
			</div>
		</div>
	);
};

export default Navbar;
