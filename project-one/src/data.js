import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export const data = [
	{
		id: 1, profile: '@nathanf', icon: AiFillFacebook, numOfFollowers: 1987, followers: 'FOLLOWERS', today: 12,
		pageViews: 87, pageViewsLabel: 'Page Views', pageViewsDelta: -3, likes: 52, likesDelta: -2
	},
	{ 
		id: 2, profile: '@nathanf', icon: FaTwitter, numOfFollowers: 1044, followers: 'FOLLOWERS', today: 90, pageViews: 87,
		pageViews: 117, pageViewsLabel: 'Retweets', pageViewsDelta: -303, likes: 507, likesDelta: -553
	},
	{
		id: 3, profile: '@realnathanf', icon: FaInstagram, numOfFollowers: 11, followers: 'FOLLOWERS', today: 1099, pageViews: 87,
		pageViews: 52000, pageViewsLabel: 'Profile Views', pageViewsDelta: -1375, likes: 5462, likesDelta: 2257
	},
	{
		id: 4, profile: 'Nathan F.', icon: FaYoutube, numOfFollowers: 8239, followers: 'SUBSCRIBERS', today: -144, pageViews: 87,
		pageViews: 1407, pageViewsLabel: 'Total Views', pageViewsDelta: -12, likes: 107, likesDelta: -19
	}
];
