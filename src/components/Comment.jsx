import { Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import useComment from "../hooks/useComment";
import useLocalStorage from "../hooks/useLocalStorage";

const Comment = ({ _id }) => {
	const [cmt, setCmt] = useState("");
	const [token, setToken] = useLocalStorage("token", "");

	const { mutate } = useComment(setCmt);

	const enterKye = (e) => {
		if (e.key === "Enter") {
			mutate({ cmt, token, _id });
		}
	};
	return (
		<Stack spacing={3} mt={2}>
			<Input
				onChange={(e) => setCmt(e.target.value)}
				placeholder={`${token.user.name.toUpperCase()} write your comment...`}
				size='md'
				onKeyPress={enterKye}
				value={cmt}
			/>
		</Stack>
	);
};

export default Comment;
