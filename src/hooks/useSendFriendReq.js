import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const sendReq = async ({ userId, token }) => {
	await instance.patch(
		"/user/freindRequestSent",
		{
			userId,
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.token}`,
			},
		}
	);
};

const useSendFriendReq = () => {
	const queryClient = useQueryClient();

	return useMutation(sendReq, {
		onSuccess: () => {
			queryClient.invalidateQueries("userDetails");
		},
		onMutate: (token) => {},
	});
};

export default useSendFriendReq;
