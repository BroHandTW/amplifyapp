import React from 'react';
import PriceTag from './PriceTag';


function PriceBox() {
  const GOODS = [
    { id: 1, credits: 520, price: 99.99, desc: 'Extra 30%' },
    { id: 2, credits: 250, price: 49.99, desc: 'Extra 25%' },
    { id: 3, credits: 100, price: 19.99, desc: 'Extra 25%' },
    { id: 4, credits: 50, price: 9.99, desc: 'Extra 25%' },
  ]
  const [active, setActive] = React.useState(1);

  return (
    <div className="PriceBox">
      { GOODS.map(info =>
        <PriceTag info={info} key={info.id}
                  active={info.id === active}
                  onClickEvent={setActive} />) }
    </div>
  );
}

export default PriceBox;
