import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const sendChats = async ({ token, message, chat }) => {
	return await instance.post(
		"/message/sendMessage",
		{
			message,
			chat,
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.token}`,
			},
		}
	);
};

const useSendChat = (setMessage) => {
	const queryClient = useQueryClient();

	return useMutation(sendChats, {
		onSuccess: () => {
			queryClient.invalidateQueries("getChatMessages");
		},
		onMutate: () => {
			setMessage("");
		},
	});
};

export default useSendChat;
