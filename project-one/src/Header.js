import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Slider from './Slider';

const Header = () => {
	return (
		<div className='Header'>
			<div className='left-part'>
				<h1>Social Media Dashboard</h1>
				<span>Total Followers: 23,004</span>
			</div>

			<div className='middle-part'>
				<Link to="/add-new-card" className="active">
					Add New Card Page
				</Link>
			</div>

			<div className='right-part'>
				<span className="dark-mode">Dark Mode</span>
				<Slider/>
			</div>
		</div>
	)
};

export default Header;
