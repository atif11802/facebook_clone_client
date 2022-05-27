import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const createChat = async ({ token, participants, isGroup }) => {
	// console.log(participants);
	return await instance.post(
		"/chat/sendchat",
		{ participants, isGroup },

		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.token}`,
			},
		}
	);
};

const useMakeChat = () => {
	const queryClient = useQueryClient();

	return useMutation(createChat);
};

export default useMakeChat;
