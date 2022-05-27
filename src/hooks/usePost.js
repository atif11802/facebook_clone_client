import axios from "../axios";
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = ({ token, friendsId }) => {
	let friendsIds = friendsId?.length ? friendsId : [];

	return axios
		.post(
			"/post/getAllPost",
			{
				friendsId: friendsIds,
			},
			{
				headers: {
					Authorization: `Bearer ${token.token}`,
				},
			}
		)
		.then((res) => {
			return res.data;
		});
};

const usePosts = ({ token, friendsId }) => {
	// return useQuery("posts", fetchPosts(token));
	return useQuery("posts", () => fetchPosts({ token, friendsId }), {
		// enabled: friendsId?.length > 0,
	});
};

export default usePosts;
