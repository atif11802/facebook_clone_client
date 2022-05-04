import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";

const Allcomments = ({ comment }) => {
	console.log(comment.text);
	return (
		<Box p='2'>
			<Box>
				<Avatar
					size='xs'
					name='Kola Tioluwani'
					src='https://bit.ly/tioluwani-kolawole'
				/>
			</Box>
			<Box>
				<Text>ratul</Text>
				<Text>{comment.text}</Text>
			</Box>
		</Box>
	);
};

export default Allcomments;
