import React from 'react';
import './CardBig.css';
import { AiFillFacebook } from 'react-icons/ai';
import { VscTriangleUp } from 'react-icons/vsc';

const CardBig = () => {
	return (
			<div className="card">
				<div className="card-top">
					<span className="social-media-icon"><AiFillFacebook/></span>
					<span className="card-top-text">@nathanf</span>
				</div>
				<div className="card-middle">
					<div className="card-number">132</div>
					<div className="card-text">followers</div>
				</div>
				<div className="card-bottom">
					<div className="card-number"><VscTriangleUp/>132</div>
				</div>
			</div>
	);
};

export default CardBig;
