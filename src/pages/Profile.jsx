import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUserDetails from "../hooks/useUserDetails";
import Navbar from "../components/Navbar";
import CoverProfile from "../pages/coverPic/CoverProfile";
import { Container } from "@chakra-ui/react";
import ProfileBody from "./ProfileBody";
import Friends from "./Friends";
import { Outlet } from "react-router-dom";

const Profile = () => {
	return (
		<>
			<Navbar />

			<Outlet />
		</>
	);
};

export default Profile;
