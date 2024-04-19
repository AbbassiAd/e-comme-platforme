import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ProductAlert = () => {
  

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h2>hellooooo</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
      <Link to="/product/Ordre">
      <button>Register</button>
      </Link>
     
    </div>
  );
};

export default ProductAlert;
