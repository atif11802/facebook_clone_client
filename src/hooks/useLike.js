import { useMutation, useQueryClient } from "react-query";
import instance from "../axios";

const likePost = ({ postId, token }) => {
	instance
		.patch(
			`/post/likePost/${postId}`,
			{
				postId: postId,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token.token}`,
				},
			}
		)
		.then((res) => {
			return res.data;
		});
};

const useLike = () => {
	const queryClient = useQueryClient();

	return useMutation("likepost", likePost, {
		onMutate: (data) => {
			queryClient.invalidateQueries("posts");
			queryClient.invalidateQueries("getOwnPost");
		},
		onSuccess: () => {},
	});
};

export default useLike;
