import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const createPost = async ({ token, value, images, cover }) => {
	const formData = new FormData();
	formData.append("name", value.name);
	formData.append("email", value.email);
	formData.append("password", value.password);
	if (images !== null) {
		Object.values(images).forEach((file) => {
			formData.append("profilePicture", file);
		});
	}
	if (cover !== null) {
		Object.values(cover).forEach((file) => {
			formData.append("coverPicture", file);
		});
	}
	await instance.patch("/user/updateUser", formData, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.token}`,
		},
	});
};

const useUpdateProfile = (token, setImages, setCover) => {
	const queryClient = useQueryClient();

	return useMutation(createPost, {
		onSuccess: (token) => {
			queryClient.invalidateQueries("userDetails");
			setImages(null);
			setCover(null);
		},
		onMutate: (token) => {},
	});
};

export default useUpdateProfile;
