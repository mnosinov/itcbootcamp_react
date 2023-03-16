import React, { useState } from 'react';
import { data } from './data';
import { AiFillFacebook } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function AddNewCard() {
	/*
		id: 1, profile: '@nathanf', icon: AiFillFacebook, numOfFollowers: 1987, followers: 'FOLLOWERS', today: 12,
		pageViews: 87, pageViewsLabel: 'Page Views', pageViewsDelta: -3, likes: 52, likesDelta: -2
	*/
	const [numOfFollowers, setNumOfFollowers] = useState(0);
	const [followers, setFollowers] = useState("followers");
	const [today, setToday] = useState(0);
	const [profile, setProfile] = useState('@nathanf');

	const navigate = useNavigate();

	function addNewCard() {
		data.push(
			{
				id: 777,
				icon:  AiFillFacebook,
				numOfFollowers: +numOfFollowers,
				followers: followers,
				today: +today,
				profile: profile,
				pageViews: 0,
				pageViewsLabel: 'viewwsss',
				pageViewsDelta: 0,
				likes: 0,
				likesDelta: 0
			}
		);
		// redirect 
		navigate("/", { replace: true });
	}

	return (
		<div className="container">
			<input type="text"
				value={numOfFollowers}
				onChange={ e => setNumOfFollowers(e.target.value) }
				placeholder="Enter number of follower"/>
			<input type="text"
				value={followers}
				onChange={ e => setFollowers(e.target.value) }
				placeholder="Enter label for the followers data"/>
			<input type="text"
				value={today}
				onChange={ e => setToday(e.target.value) }
				placeholder="Enter likes for today"/>
			<input type="text"
				value={profile}
				onChange={ e => setProfile(e.target.value) }
				placeholder="Enter profile name"/>
			<button onClick={addNewCard}>Add New Card</button>
		</div>
	);
}

export default AddNewCard;


