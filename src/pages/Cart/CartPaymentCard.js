import React, { useState, useEffect } from 'react';
import Cards from 'r17-react-credit-cards';

function CardPaymentCard(props) {
    const [credit, setCredit] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    return (
        <div id="PaymentForm">
            <Cards
                cvc={credit.cvc}
                expiry={credit.expiry}
                focused={credit.focus}
                name={credit.name}
                number={credit.number}
            />
            <form className="from">
                <div>
                    <input
                        className="pay-form-d"
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div>
                    <input
                        className="pay-form"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="month-input">
                    <input
                        className="pay-form-p"
                        type="expiry"
                        name="expiry"
                        placeholder="Exp Month Data"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        className="pay-form-p"
                        type="cvc"
                        name="cvc"
                        placeholder="CVV"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
            </form>
        </div>
    );

    function handleInputFocus(e) {
        const newCredit = { ...credit };
        newCredit.focus = e.target.name;
        setCredit(newCredit);
    }

    function handleInputChange(e) {
        const newCredit = { ...credit };
        newCredit[e.target.name] = e.target.value;
        setCredit(newCredit);
    }
}

export default CardPaymentCard;
