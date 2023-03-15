import React from 'react';
import './CardSmall.css';
import { AiFillFacebook } from 'react-icons/ai';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';

const CardSmall = ({ card: { profile, today, icon: Icon, followers, numOfFollowers } }) => {
	return (
		<div className="card">
			<div className="card-top">
				<span className="social-media-icon">{<Icon/>}</span>
				<span className="card-top-text">{ profile }</span>
			</div>
			<div className="card-middle">
				<div className="card-number">{ numOfFollowers }</div>
				<div className="card-text">{ followers }</div>
			</div>
			<div className="card-bottom">
				<div className={ today > 0 ? "card-number" : "card-number negative-trend"}>
					{ today >= 0 ? <VscTriangleUp/> : VscTriangleDown() } { Math.abs(today) }
				</div>
			</div>
		</div>
);
};

export default CardSmall;
