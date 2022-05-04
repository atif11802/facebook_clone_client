import instance from "../axios";
import { useMutation, useQueryClient } from "react-query";

const postAbout = ({ about, token }) => {
	return instance
		.patch(
			`/user/about`,

			{
				about: about,
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

const useAbout = (setIsAboutEdited, setToken, token, setAbout) => {
	const queryClient = useQueryClient();

	return useMutation("About", postAbout, {
		onSuccess: (data) => {
			setAbout(data.data.about);
			setIsAboutEdited(false);
			queryClient.invalidateQueries("userDetails");
		},
	});
};

export default useAbout;
