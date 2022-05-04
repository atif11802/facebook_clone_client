import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";

const Allcomments = ({ comment }) => {
	const { createdAt } = comment;

	return (
		<Box
			p='2'
			display='flex'
			// alignItems='center'
			border='1px'
			borderColor='gray.200'
			mt='1'
			borderTopRadius='md'
		>
			<Box>
				<Avatar
					mt='1'
					size='xs'
					name='Kola Tioluwani'
					src='https://bit.ly/kent-c-dodds'
				/>
			</Box>
			<Box ml='3' fontSize='12px'>
				<Link
					to={`/profile/${comment.commentedBy._id}`}
					style={{ textDecoration: "none" }}
				>
					<Text fontSize='15px' color='black'>
						{comment.commentedBy.name}
					</Text>
				</Link>

				<Text color='gray.400'>{comment.text}</Text>
				<Text color='gray.400'>{moment(createdAt).fromNow()}</Text>
			</Box>
		</Box>
	);
};

export default Allcomments;
