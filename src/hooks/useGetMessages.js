import { useQuery } from "react-query";
import instance from "../axios";

const getMessages = async (id, token) => {
	// console.log(id, token);
	const res = await instance.get(`/message/getMessage/${id}`, {
		headers: {
			Authorization: `Bearer ${token.token}`,
		},
	});
	// console.log(res);
	return res.data;
};

const useGetMessages = (id, token) => {
	return useQuery("getChatMessages", () => getMessages(id, token), {
		enabled: !!id,
	});
};

export default useGetMessages;
