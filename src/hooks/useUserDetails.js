import { useQuery } from "react-query";
import instance from "../axios";

const fetchUserDetails = async (id, token) => {
	return instance
		.get(
			`user/${id}`,
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

const useUserDetails = (id, token) => {
	return useQuery("userDetails", () => fetchUserDetails(id, token));
};

export default useUserDetails;
