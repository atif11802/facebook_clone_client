import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import Navbar from "../components/Navbar";
import CoverProfile from "../pages/coverPic/CoverProfile";
import { Container } from "@chakra-ui/react";
import ProfileBody from "./ProfileBody";

const Profile = () => {
	const { userId } = useParams();
	const [token, setToken] = useLocalStorage("token", "");
	const { data, isLoading, isError } = useUserDetails(userId, token);

	return (
		<>
			<Navbar />

			<Container maxW='5xl' color='#262626'>
				<CoverProfile data={data} />
				<ProfileBody />
			</Container>
		</>
	);
};

export default Profile;
