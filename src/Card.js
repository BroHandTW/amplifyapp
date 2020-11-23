import React from 'react';
import CreditCardInput from 'react-credit-card-input';
import 'react-credit-cards/lib/styles-compiled.css'
import Cards from 'react-credit-cards';

function MyCards() {
  const [focused, setFocused] = React.useState('number');
  const [cardName, setCardName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardExpiry, setCardExpiry] = React.useState('');
  const [cardCVC, setCardCVC] = React.useState('');

  const handleInputFocus = ({ target }) => {
    setFocused(target.name)
  };

  return (
    <div className="myCardForm" style={{paddingTop: '25px', backgroundColor: 'white'}}>
      <Cards
				cvc={cardCVC}
				expiry={cardExpiry.replaceAll(' ', '')}
				name={cardName}
        number={cardNumber}
        focused={focused}
			/>

      <form>
        <input type="text" name="name" className="name" placeholder="Your Name"
               onChange={({ target })=> setCardName(target.value)}
               onFocus={handleInputFocus}
               />
        <CreditCardInput
          cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
            <input
            {...props}
            name="number"
            onChange={handleCardNumberChange(({ target })=> setCardNumber(target.value))}
            onFocus={handleInputFocus}
            />
          )}
          cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
            <input
              {...props}
              name="expiry"
              onChange={handleCardExpiryChange(({ target })=> setCardExpiry(target.value))}
              onFocus={handleInputFocus}
            />
          )}
          cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
            <input
              {...props}
              name="cvc"
              onChange={handleCardCVCChange(({ target })=> setCardCVC(target.value))}
              onFocus={handleInputFocus}
            />
          )}
          fieldClassName="input"
        />
      </form>
    </div>
  );
}

export default MyCards;
