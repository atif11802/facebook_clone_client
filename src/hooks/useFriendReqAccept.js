import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const acceptReq = async ({ userId, token }) => {
	await instance.patch(
		"/user/acceptreq",
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

const useFriendReqAccept = () => {
	const queryClient = useQueryClient();

	return useMutation(acceptReq, {
		onSuccess: () => {
			queryClient.invalidateQueries("userDetails");
		},
		onMutate: (token) => {},
	});
};

export default useFriendReqAccept;
