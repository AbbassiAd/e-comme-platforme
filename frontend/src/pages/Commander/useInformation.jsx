import React, { useState } from 'react';

import { useSelector } from 'react-redux';

export default function UserInformation(){
    const { userInfo } = useSelector((state) => state.auth);
    const [firstname, setFirstname] = useState(userInfo?.firstname);
    const [lastname, setLastname] = useState(userInfo?.lastname);
    const [email, setEmail] = useState(userInfo?.email);
    const [phone, setPhone] = useState(userInfo?.phone);
  
    const [address, setAddress] =
    useState(userInfo?.shippingAddress?.address) || "";
  const [country, setCountry] =
    useState(userInfo?.shippingAddress?.country) || "";
  const [city, setCity] = useState(userInfo?.shippingAddress?.city) || "";
  const [postalCode, setPostalCode] =
    useState(userInfo?.shippingAddress?.postalCode) || "";
    
    return<form className="relative flex flex-wrap justify-center mr-[600px] mt-[30px]">
  
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
  
     
  
    </form>
  
}