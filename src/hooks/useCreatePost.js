import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const createPost = async ({ images, postbody, token }) => {
	const formData = new FormData();
	formData.append("body", postbody);
	if (images !== null) {
		Object.values(images).forEach((file) => {
			console.log(file);
			formData.append("postPictures", file);
		});
	}

	await instance.post(
		"/post/addPost",

		formData,

		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.token}`,
			},
		}
	);
};

const useCreatePost = ({ onClose, setPostbody, setImages }) => {
	const queryClient = useQueryClient();

	return useMutation(createPost, {
		onSuccess: () => {
			onClose();
			setPostbody("");
			setImages(null);
			queryClient.invalidateQueries("posts");
			queryClient.invalidateQueries("getOwnPost");
		},
	});
};

export default useCreatePost;
