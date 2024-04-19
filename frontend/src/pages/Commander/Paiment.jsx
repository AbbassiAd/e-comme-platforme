import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCreditCard } from 'react-icons/ai';
import { IoMdCar } from 'react-icons/io';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { CheckCircleFill } from 'react-bootstrap-icons';
import Navigation from '../Navigation';

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import PaiementInformation from './PaimentInformation';

const Paiment = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const [firstname, setFirstname] = useState(userInfo?.firstname);
  const [lastname, setLastname] = useState(userInfo?.lastname);
  const [email, setEmail] = useState(userInfo?.email);
  const [phone, setPhone] = useState(userInfo?.phone);
  const [produits, setProduit] = useState([])
  const [address, setAddress] =
  useState(userInfo?.shippingAddress?.address) || "";
const [country, setCountry] =
  useState(userInfo?.shippingAddress?.country) || "";
const [city, setCity] = useState(userInfo?.shippingAddress?.city) || "";
const [postalCode, setPostalCode] =
  useState(userInfo?.shippingAddress?.postalCode) || "";
  const [paymentMethod, setPaymentMethod] = useState('');
 
  const [deliveryOption, setDeliveryOption] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

 



  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
  
  };

  return (
    <>
   
   <Navigation />

    <div className="container mx-auto">
    <div className="container mx-auto text-center mt-[30px] mb-[30px]">
  <h1 className="text-3xl font-bold mb-4 text-gray-800">Passer la commande</h1>
</div>


      
      <Steps current={currentStep - 1} className="flex justify-between mb-[30px]">
      <Steps.Step
        title="Verification"
        status={currentStep >= 1 ? 'finish' : 'wait'}
        icon={currentStep === 1 ? <SolutionOutlined className={currentStep === 1 ? "text-blue-500 text-6xl" : "text-gray-500 text-6xl"} /> : null}
      />
      <Steps.Step
        title="Paiement"
        status={currentStep >= 2 ? 'finish' : 'wait'}
        icon={<AiOutlineCreditCard className={currentStep >= 2 ? "text-blue-500 text-6xl" : "text-gray-900 text-6xl"} />}
      />
      <Steps.Step
        title="Livraison"
        status={currentStep >= 3 ? 'finish' : 'wait'}
        icon={<IoMdCar className={currentStep >= 3 ? "text-blue-500 text-6xl" : "text-gray-900 text-6xl"} />}
      />
      <Steps.Step
        title="Done"
        status={currentStep >= 4 ? 'finish' : 'wait'}
        icon={<CheckCircleFill className={currentStep >= 4 ? "text-blue-500 text-6xl" : "text-gray-900 text-6xl"} />}
      />
    </Steps>


      {currentStep === 1 && (
      <div className="mb-4">
      <form className="relative flex flex-wrap justify-center mr-[600px] mt-[30px]">
    
        <div className="max-w-md mx-4 w-[400px] bg-white shadow-lg rounded border border-gray-300 border-opacity-500 px-8 pt-6 pb-8 mb-4">
          <h4 className="text-lg font-bold mb-4">Customer Information</h4>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstName" placeholder="Enter your first name" required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your last name" required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" placeholder="Enter your email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Phone Number</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="phone" placeholder="Enter your phone number" required
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
    
    
        <div className="max-w-md mx-4 w-[400px] bg-white shadow-lg rounded border border-gray-300 border-opacity-500 px-8 pt-6 pb-8 mb-4">
          <h4 className="text-lg font-bold mb-4">Shipping Details</h4>
    
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingStreet">Street Address</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="shippingStreet" placeholder="Enter your street address" required
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingCity">City</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="shippingCity" placeholder="Enter your city" required
              value={city}
              onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingPostalZipCode">Postal/Zip Code</label>
            <input className="checkout__input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)} />
          </div>
        </div>
    
        <button onClick={handleNextStep} className="bg-black hover:bg-black-700 text-white h-[50px] w-[200px] rounded focus:outline-none focus:shadow-outline mt-4">
          Validate Information
        </button>
    
      </form>
    
      <div className='absolute top-[240px] left-[1100px]'>
        <CartProduct />
    
      </div>
    </div>
    



        
      )}

      {currentStep === 2 && (
         <>
  <div className="flex">
    <div className="w-full md:w-3/4 lg:w-1/2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 lg:p-12">
          <PaiementInformation />
          <button onClick={handleNextStep} className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
            Confirm Order Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className='absolute top-[240px] right-[90px]'>
    <CartProduct />
  </div>
</>

    

      )}

{currentStep === 3 && (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 flex items-center">
      Livraison <IoMdCar className="ml-2" />
    </h2>
    <select
      value={deliveryOption}
      onChange={handleDeliveryOptionChange}
      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:border-blue-500"
    >
      <option value="">Choisir une option de livraison</option>
      <option value="standard">Standard</option>
      <option value="express">Express</option>
    </select>
    <button 
      onClick={handleNextStep}
      className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring focus:border-blue-500"
    >
      Valider option de livraison
    </button>
  </div>
)}

{currentStep === 4 && (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Passer la commande</h2>
    <button 
      onClick={handleSubmit}
      className="w-full bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 focus:outline-none focus:ring focus:border-blue-500"
    >
      Passer la commande
    </button>
  </div>
)}

    </div>
    </>
  );
};

export default Paiment;
