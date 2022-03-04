import React , { useState, useEffect } from 'react';
import Cards from 'r17-react-credit-cards';


function CardPaymentCard (props) {
    const [credit, setCredit] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    })

    return (
        <div id="PaymentForm">
        <Cards
          cvc={credit.cvc}
          expiry={credit.expiry}
          focused={credit.focus}
          name={credit.name}
          number={credit.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="month"
            placeholder="Exp Month"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="data"
            placeholder="Exp Data"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvv"
            placeholder="CVV"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          
        </form>
      </div>
    );

    function handleInputFocus(e) {
        const newCredit = {...credit};
        newCredit.focus = e.target.name;
        setCredit(newCredit);
    }

    function handleInputChange(e) {
        const newCredit = {...credit};
        newCredit[e.target.name] = e.target.value;
        setCredit(newCredit);
    }
}

export default CardPaymentCard;