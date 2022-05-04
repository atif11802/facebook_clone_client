import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const postComment = ({ cmt, token, _id }) => {
	return instance
		.patch(
			`/post/commentPost/${_id}`,

			{
				body: cmt,
			},

			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token.token}`,
				},
			}
		)
		.then((response) => response.data);
};

const useComment = (setCmt) => {
	const queryClient = useQueryClient();

	return useMutation("postComment", postComment, {
		onSuccess: () => {
			setCmt("");
			queryClient.invalidateQueries("posts");
		},
	});
};

export default useComment;
