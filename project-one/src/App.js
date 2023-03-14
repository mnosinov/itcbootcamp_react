import './App.css';
import Header from './Header';
import CardBig from './CardBig';

function App() {
  return (
    <div className="App">
			<Header/>
			<div className="cards-container">
				<CardBig/>
				<CardBig/>
				<CardBig/>
				<CardBig/>
			</div>
    </div>
  );
}

export default App;
