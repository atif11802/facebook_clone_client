import axios from "../axios";
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = (token) => {
	return axios
		.get(
			"/post/getAllPost",

			{
				headers: {
					Authorization: `Bearer ${token.token}`,
				},
			}
		)
		.then((res) => res.data);
};

const usePosts = (token) => {
	// return useQuery("posts", fetchPosts(token));
	return useQuery("posts", () => fetchPosts(token));
};

export default usePosts;
