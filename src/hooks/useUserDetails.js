import { useQuery, useQueryClient } from "react-query";
import instance from "../axios";

const fetchUserDetails = async (id) => {
	console.log(id);
	return instance.get(`user/${id}`).then((res) => {
		console.log(res);
		return res.data;
	});
};

const useUserDetails = (id) => {
	const queryClient = useQueryClient();
	return useQuery("userDetails", () => fetchUserDetails(id), {
		enabled: false,
	});
};

export default useUserDetails;
