
import './App.css';
import Card from './Card';
import PriceBox from './PriceBox';

function App() {
  return (
    <div className="App">
      <PriceBox />
      <Card />
      <button className="payButton">PAY</button>
    </div>
  );
}

export default App;
