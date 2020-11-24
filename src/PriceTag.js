import React from 'react';
import './PriceTag.css'

// { id: 1, credits: 520, price: 99.99, desc: 'Extra 30%' },

function PriceTag({info, active, onClickEvent, currency}) {

  const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderPrice = () => {
    if(currency === 'php') {

     return <div className="price">
    <span className="value">₱{ numberWithCommas(info.price.php) }</span>
  </div>
    }
    if(currency === 'usd') {

     return <div className="price">
      <span className="value">${ numberWithCommas(info.price.usd) }</span>
      <span className="unit">USD</span>
    </div>
    }
  }

  return (
    <div className={`PriceTag ${active ? 'active' : 'unactive'}`} onClick={()=>onClickEvent(info.id)}>
      <span className="credit">
        { info.credits }
      </span>
      <span className="desc">
        <div className="point">Tokens</div>
        <div className="hint">{ info.desc }</div>
      </span>
      {renderPrice()}
    </div>
  );
}

export default PriceTag;
