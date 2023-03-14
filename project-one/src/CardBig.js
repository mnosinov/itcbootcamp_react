import React from 'react';
import './CardBig.css';
import { AiFillFacebook } from 'react-icons/ai';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';

const CardBig = (props) => {
	console.log(props);
	const { card } = props;
	const todayStyle = 'card-number' + (card.today >= 0 ? '' : ' negative-trend');
	return (
			<div className="card">
				<div className="card-top">
					<span className="social-media-icon"><card.icon/></span>
					<span className="card-top-text">{ card.profile }</span>
				</div>
				<div className="card-middle">
					<div className="card-number">{ card.numOfFollowers }</div>
					<div className="card-text">{ card.followers }</div>
				</div>
				<div className="card-bottom">
					<div className={todayStyle}>
						{ card.today >= 0 ? <VscTriangleUp/> : <VscTriangleDown/> } { Math.abs(card.today) }
					</div>
				</div>
			</div>
	);
};

export default CardBig;
