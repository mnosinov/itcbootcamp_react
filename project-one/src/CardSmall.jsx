import React from 'react';
import './CardSmall.css';
import { AiFillFacebook } from 'react-icons/ai';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';

function numberFormatter(num) {
	let numAbs = Math.abs(num);
	if (numAbs > 9999 && numAbs <= 999999) {
    return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k';
	} if (numAbs > 999999 && numAbs <= 999999999) {
    return Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'm';
	} else {
    return num;
	}

}

const CardSmall = ( { card: { icon: Icon, pageViews, pageViewsLabel, pageViewsDelta, likes, likesDelta }, type }) => {
		if (type === 'pageViews') {
			return (
				<div className="card-small">
					<div className="card-small-top">
						<span className="card-small-top-text">Likes</span>
						<span className="social-media-icon">{<Icon/>}</span>
					</div>
					<div className="card-small-bottom">
						<div className="card-info">{ numberFormatter(pageViews) }</div>
						<div className={ pageViewsDelta > 0 ? "card-number" : "card-number negative-trend"}>
							{ pageViewsDelta >= 0 ? <VscTriangleUp/> : VscTriangleDown() } { Math.abs(pageViewsDelta) + "%" }
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="card-small">
					<div className="card-small-top">
						<span className="card-small-top-text">{ pageViewsLabel }</span>
						<span className="social-media-icon">{<Icon/>}</span>
					</div>
					<div className="card-small-bottom">
						<div className="card-info">{ numberFormatter(likes) }</div>
						<div className={ likesDelta > 0 ? "card-number" : "card-number negative-trend"}>
							{ likesDelta >= 0 ? <VscTriangleUp/> : VscTriangleDown() } { Math.abs(likesDelta) + "%" }
						</div>
					</div>
				</div>
			);
		}
};

export default CardSmall;
