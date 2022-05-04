import { useQuery } from "react-query";
import instance from "../axios";

const getOwnPost = async (token) => {
	const res = await instance.get("/post/getOwnPost", {
		headers: {
			Authorization: `Bearer ${token.token}`,
		},
	});
	return res.data;
};

const useGetOwnPost = (token) => {
	return useQuery("getOwnPost", () => getOwnPost(token));
};

export default useGetOwnPost;
