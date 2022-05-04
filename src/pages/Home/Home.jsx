import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import MainPage from "../MainPage";
import Chat from "../Chat";
import "./home.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Flex minWidth='max-content' gap='2' justifyContent='space-between'>
				<Sidebar />
				<MainPage />
				<Chat />
			</Flex>
		</div>
	);
};

export default Home;
