import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import Navbar from "../components/Navbar";
import CoverProfile from "../pages/coverPic/CoverProfile";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Profile = () => {
	const { userId } = useParams();

	return (
		<>
			<Navbar />
			<CoverProfile userId={userId} />
			<Outlet />
		</>
	);
};

export default Profile;
