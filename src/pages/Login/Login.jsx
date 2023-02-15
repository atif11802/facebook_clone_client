import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { RiFileList3Fill } from "react-icons/ri";
import { MdCastConnected, MdPermContactCalendar } from "react-icons/md";
import Loader from "react-spinners/BeatLoader";
import axios from "../../axios";
import useLocalStorage from "../../hooks/useLocalStorage";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [semail, setsEmail] = useState("");
	const [spassword, setsPassword] = useState("");
	const [token, setToken] = useLocalStorage("token", "");

	const navigate = useNavigate();

	useEffect(() => {
		if (token?.token) {
			navigate("/");
		}
	}, [token]);

	const handleLogin = async (e) => {
		e.preventDefault();
		if (email.length > 0 && password.length > 0) {
			try {
				const { data } = await axios.post("/auth/signin", {
					email,
					password,
				});
				setToken(data);
			} catch (error) {
				if (error.response) {
					console.log(error);
					// Request made and server responded
					console.log(error.response.data);
				}
			}
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		if (semail.length > 0 && spassword.length && name.length > 0) {
			try {
				const { data } = await axios.post("/auth/signup", {
					name,
					email: semail,
					password: spassword,
				});
				setToken(data);
			} catch (error) {
				if (error.response) {
					// Request made and server responded
					console.log(error.response.data);
				}
			}
		}
	};

	return (
		<div className='login'>
			<div className='login__header'>
				<div className='login__header__left'>
					<Link to='/'>
						<h2>facebook</h2>
					</Link>
				</div>
				<div className='login__header__right'>
					<form onSubmit={handleLogin}>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type='text'
							placeholder='Email or phone number'
							value={email}
						/>
						<input
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<button>log in</button>
					</form>
				</div>
			</div>
			<div className='login__body'>
				<div className='login__body__left'>
					<h2>
						connect with friends and the <br /> world around you on facebook
					</h2>

					<p>
						<Icon as={RiFileList3Fill} w={6} h={6} />
						<span>See photos and updates </span>
						from friends in News Feed. <br />
						<Icon as={MdCastConnected} w={6} h={6} />
						<span>Share what's new</span>
						in your life on your Timeline. <br />
						<Icon as={MdPermContactCalendar} w={6} h={6} />
						<span>Find more</span>
						of what you're looking for with Facebook Search.
					</p>
				</div>
				<div className='login__body__right'>
					<h2>
						Sign Up for Facebook <br />
						<span>It's free and always will be.</span>
					</h2>
					<form>
						<input
							type='text'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='email'
							placeholder='email address'
							value={semail}
							onChange={(e) => setsEmail(e.target.value)}
						/>
						<input
							type='password'
							placeholder='Password'
							value={spassword}
							onChange={(e) => setsPassword(e.target.value)}
						/>

						<Button
							onClick={handleSignUp}
							colorScheme={"teal"}
							spinner={<Loader />}
						>
							Sign Up
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
