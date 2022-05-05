import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { ReactQueryDevtools } from "react-query/devtools";
import PrivateRoute from "./privateRoute";
import useLocalStorage from "./hooks/useLocalStorage";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import ProfileBody from "./pages/ProfileBody";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				{/* <Route
					path='/profile/:userId'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/> */}
				<Route
					path='/profile/'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				>
					<Route path=':userId' element={<ProfileBody />} />
					<Route path='friends/:userId' element={<Friends />} />
				</Route>

				<Route path='/login' element={<Login />} />
			</Routes>
			<ReactQueryDevtools initialIsOpen={false} />
		</div>
	);
};

export default App;
