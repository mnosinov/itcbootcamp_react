import React from 'react';
import './CardBig.css';
import { AiFillFacebook } from 'react-icons/ai';

const CardBig = () => {
	return (
		<div className="card">
			<div className="card-top">
				<AiFillFacebook/>
				<span className="card-top-text">@nathanf</span>
			</div>
			<div className="card-middle">
				<div className="card-number">132</div>
				<div className="card-text">ASDFEWF</div>
			</div>
			<div className="card-bottom">
				<div className="card-number">132</div>
				<div className="card-text">ASDFEWF</div>
			</div>
		</div>
	);
};

export default CardBig;
