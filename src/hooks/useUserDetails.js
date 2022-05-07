import { useQuery, useQueryClient } from "react-query";
import instance from "../axios";

const fetchUserDetails = async (id) => {
	return instance.get(`user/${id}`).then((res) => {
		return res.data;
	});
};

const useUserDetails = (id) => {
	const queryClient = useQueryClient();
	return useQuery(["userDetails", id], () => fetchUserDetails(id), {
		enabled: !!id,
	});
};

export default useUserDetails;
