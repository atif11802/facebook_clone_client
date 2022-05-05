import React from "react";
import { Link } from "react-router-dom";
import "./coverPofile.css";

const CoverProfile = ({ data }) => {
	return (
		<div className='fb-profile-block'>
			<div className='fb-profile-block-thumb'>
				<img
					src='https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
							<Link to={`/profile/friends/${data?.data._id}`}>Friends</Link>
						</li>
						<li>
							<a href='#'>Photos</a>
						</li>
						<li>
							<a href='#'>More...</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CoverProfile;
