import { useQuery } from "react-query";
import instance from "../axios";

const getOwnPost = async (id, token) => {
	const res = await instance.get(`/post/getOwnPost/${id}`, {
		headers: {
			Authorization: `Bearer ${token.token}`,
		},
	});
	return res.data;
};

const useGetOwnPost = (id, token) => {
	return useQuery("getOwnPost", () => getOwnPost(id, token));
};

export default useGetOwnPost;
