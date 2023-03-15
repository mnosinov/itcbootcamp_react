import './App.css';
import Header from './Header';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import { data } from './data.js';
import { useState } from 'react';

function App() {
	const [increment, setIncrement] = useState(0);

	function incrementer() {
		setIncrement(increment + 1);
	}

	function decrementer() {
		setIncrement(increment - 1);
	}

  return (
    <div className="App">
			<button className="clicker-btn" onClick={incrementer}>
				clicker+
			</button>
			<button className="clicker-btn" onClick={decrementer}>
				clicker-
			</button>
			<h1>{increment}</h1>
			<Header/>
			<div className="cards-container">
				{
					data.map( (card) => {
						return <CardBig increment={increment} key={card.id} card={card}/>;
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
