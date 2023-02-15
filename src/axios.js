import axios from "axios";

const instance = axios.create({
	// baseURL: "http://localhost:8000/api/",
	baseURL: "https://fakebookserver.onrender.com/api/",

	headers: {
		"Content-Type": "application/json",
	},
});

export default instance;
