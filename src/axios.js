import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:9000/api/",
	// baseURL: "https://facbookcloneratul.herokuapp.com/api/",
});

export default instance;
