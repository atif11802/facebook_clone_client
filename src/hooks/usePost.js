import axios from "../axios";
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = ({ token, friendsId }) => {
	return axios
		.post(
			"/post/getAllPost",
			{
				friendsId,
			},
			{
				headers: {
					Authorization: `Bearer ${token.token}`,
				},
			}
		)
		.then((res) => res.data);
};

const usePosts = ({ token, friendsId }) => {
	// return useQuery("posts", fetchPosts(token));
	return useQuery("posts", () => fetchPosts({ token, friendsId }), {
		enabled: friendsId?.length > 0,
	});
};

export default usePosts;
