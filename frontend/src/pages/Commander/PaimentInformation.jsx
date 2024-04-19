import React, { useState } from 'react';
let paiementInformation= [];
const PaymentInformation = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  
  const handlePaymentChange = (paymentType) => {
    setSelectedPayment(paymentType);
  };


  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">Payment Information</h2>
      <form action="">
        <div className="flex justify-center mb-8">
          <div className="flex items-center mr-6 cursor-pointer" onClick={() => handlePaymentChange('credit')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/WIAP9Ku.jpg" alt="Credit Card" />
            <p className={`text-lg ${selectedPayment === 'credit' ? 'text-black' : 'text-gray-400'}`}>Credit Card</p>
          </div>
          <div className="flex items-center mr-6 cursor-pointer" onClick={() => handlePaymentChange('debit')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/OdxcctP.jpg" alt="Debit Card" />
            <p className={`text-lg ${selectedPayment === 'debit' ? 'text-black' : 'text-gray-400'}`}>Debit Card</p>
          </div>
          <div className="flex items-center cursor-pointer" onClick={() => handlePaymentChange('paypal')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/cMk1MtK.jpg" alt="PayPal" />
            <p className={`text-lg ${selectedPayment === 'paypal' ? 'text-black' : 'text-gray-400'}`}>PayPal</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-semibold">Name on Card</label>
            <input type="text" id="cname" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardName} onChange={(e)=>setCardName(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Card Number</label>
            <input type="text" id="cnum" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Expiration Date</label>
            <input type="text" id="exp" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardExpiration} onChange={(e)=>setCardExpiration(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">CVV</label>
            <input type="text" id="cvv" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardCvv} onChange={(e)=>setCardCvv(e.target.value)} />
          </div>
        </div>
      </form>
    </>
  );
};

export default PaymentInformation;
export { PaymentInformation } ;
