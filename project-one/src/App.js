import './App.css';
import Header from './Header';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import { data } from './data.js';
import { useState } from 'react';

function App() {
	const [increment, setIncrement] = useState(10);

	function incrementer() {
		setIncrement(increment + 1);
	}

  return (
    <div className="App">
			<button className="clicker-btn" onClick={incrementer}>
				clicker
			</button>
			<h1>{increment}</h1>
			<Header/>
			<div className="cards-container">
				{
					data.map( (card) => {
						return <CardBig key={card.id} card={card}/>;
					})
				}
			</div>
			<div className="overview-title">
				<h3>Overview - Today</h3>
			</div>
			<div className="cards-small-container">
				{
					data.flatMap( (card) => [
							<CardSmall key={10 + card.id} card={card} type="likes"/>,
							<CardSmall key={100 + card.id} card={card} type="pageViews"/>
						]
					)
				}
			</div>
    </div>
  );
}

export default App;
