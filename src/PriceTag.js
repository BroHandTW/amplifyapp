import React from 'react';
import './PriceTag.css'

// { id: 1, credits: 520, price: 99.99, desc: 'Extra 30%' },

function PriceTag({info, active, onClickEvent}) {
  return (
    <div className={`PriceTag ${active ? 'active' : 'unactive'}`} onClick={()=>onClickEvent(info.id)}>
      <span className="credit">
        { info.credits }
      </span>
      <span className="desc">
        <div className="point">CREDITS</div>
        <div className="hint">{ info.desc }</div>
      </span>
      <div className="price">
        <span className="dollarSign">$</span>
        <span className="value">{ info.price }</span>
      </div>
    </div>
  );
}

export default PriceTag;
