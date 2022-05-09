import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import useUserDetails from "../../hooks/useUserDetails";
import "./coverPofile.css";

const CoverProfile = ({ userId }) => {
	const { data, isLoading, isError } = useUserDetails(userId);
	const [token, setToken] = useLocalStorage("token", "");

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className='fb-profile-block'>
				<div className='fb-profile-block-thumb'>
					<img
						src={
							data?.data?.coverPhoto?.res
								? data.data.coverPhoto.res
								: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						}
						alt=''
						title=''
					/>
				</div>
				<div className='profile-img'>
					<a href='#'>
						<img src={data?.data?.image?.res} alt='profilePicture' title='' />
					</a>
				</div>
				<div className='profile-name'>
					<h2>{data?.data?.name}</h2>
				</div>

				<div className='fb-profile-block-menu'>
					<div className='block-menu'>
						<ul>
							<li>
								<Link to={`/profile/${data?.data._id}/`}>Post</Link>
							</li>
							<li>
								<Link to={`/profile/${data?.data._id}/friends`}>Friends</Link>
							</li>
							{token?.user._id === data?.data._id && (
								<li>
									<Link to={`/profile/${data?.data._id}/requestReceived`}>
										Friend Request Received
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverProfile;
