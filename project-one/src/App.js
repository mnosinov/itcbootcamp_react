import './App.css';
import Header from './Header';
import CardBig from './CardBig';
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
    </div>
  );
}

export default App;
