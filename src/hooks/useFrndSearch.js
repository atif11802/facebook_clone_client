import axios from "../axios";
import React from "react";
import { useMutation, useQuery } from "react-query";

const fetchSearchFriends = ({ token, name }) => {
	return axios
		.post(
			`/user/search?search=${name}`,
			{},
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

const useFrndSearch = (setUsers) => {
	return useMutation(fetchSearchFriends, {
		onSuccess: (data, variables, context) => {
			setUsers(data.data);
		},
	});
};

export default useFrndSearch;
