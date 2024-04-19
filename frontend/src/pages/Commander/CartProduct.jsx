
import { useState } from 'react';
import { produitsSelectionners } from "../../redux/features/cart/Cart";

export default function CartProduct() {
  const [cartItems, setCartItems] = useState(produitsSelectionners);

  

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
          <div className="px-6 py-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-8">Votre products</h4>
            {cartItems.map((product) => (
              <div key={product.id} className="flex items-center mb-6 border-b pb-4">
                <div className="flex-none w-20 h-20 relative">
                  <img
                    src={product.images.image1}
                    alt="Image produit"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex-auto ml-4">
                  <h6 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h6>
                  <p className="text-sm text-gray-600 mb-2">{product.description.substring(0, 60)}...</p>
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-4">${product.price}</span>
                    <p className="border border-gray-300 rounded-md px-3 py-1 text-sm mr-4">Quantité: {product.quantity}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-900 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-50">Total (USD)</span>
              <strong className="text-2xl text-gray-100">
                ${cartItems.reduce((total, product) => total + product.price * product.quantity+29, 0)}
              </strong>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
