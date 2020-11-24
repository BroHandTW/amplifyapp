import React from 'react';
import PriceTag from './PriceTag';


function PriceBox() {
  const GOODS = [
    { id: 1, credits: 35, price: { usd: 70, php: 3500 }, desc: 'Extra 30%' },
    { id: 2, credits: 25, price: { usd: 50, php: 2500 }, desc: 'Extra 25%' },
    { id: 3, credits: 10, price: { usd: 20, php: 1000 }, desc: 'Extra 25%' },
    { id: 4, credits: 5, price: { usd: 10, php: 500 }, desc: 'Extra 25%' },
  ]

  const [active, setActive] = React.useState(1);
  const [currency, setCurrency] = React.useState('usd');

  const selectedItem = GOODS.find(({id})=>id === active);

  return (
    <div className="PriceBox">
      { GOODS.map(info =>
        <PriceTag info={info} key={info.id}
                  currency={currency}
                  active={info.id === active}
                  onClickEvent={setActive} />) }
      <div className="unitSelector" style={{margin: '0 40px', textAlign: 'right'}}>
        <label><input type="radio" name="currency" value="usd" checked={currency === 'usd'} onChange={({target})=> setCurrency(target.value)}/>USD</label>
        <label><input type="radio" name="currency" value="php" checked={currency === 'php'} onChange={({target})=> setCurrency(target.value)}/>PHP</label>
        <input type="hidden" id="pay[currency]" value={ currency.toUpperCase() } />
        <input type="hidden" id="pay[amount]" value={ selectedItem.price[currency] } />
      </div>
    </div>
  );
}

export default PriceBox;
