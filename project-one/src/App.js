import './App.css';
import Header from './Header';
import CardBig from './CardBig';
import CardSmall from './CardSmall';
import { data } from './data.js';

function App() {
  return (
    <div className="App">
			{ Header() }
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
					data.flatMap( (card) => {
						return [<CardSmall key={10 + card.id} card={card} type="pageViews"/>, <CardSmall key={100 + card.id} card={card} type="likes"/>];
					})
				}
			</div>
    </div>
  );
}

export default App;
