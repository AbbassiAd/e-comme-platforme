/* /* import { Link } from "react-router-dom"
import { FaStar} from "react-icons/fa";

export default function TopProduct({ product }) {
    return (
        <Link to={`/product/${product._id}`}>
        <div class="relative h-30  mt-10 mb-10 mb-2">
          <div className="flex justify-center items-center p-6 h-64">
                  <img src={product.images.image1} alt="" className="h-auto w-40" />
              </div>
            <h3 class="text-lg font-semibold mt-1">{product.name}</h3>
            <p class="text-base mt-1">${product.price}</p>
            <div className="flex gap-2 items-center">
            <FaStar
              className={`${
                product?.rating - 1 >= 0 ? "text-yellow-300" : "text-gray-300"
              }`}
            />
            <FaStar
              className={`${
                product?.rating - 2 >= 0 ? "text-yellow-300" : "text-gray-300"
              }`}
            />
            <FaStar
              className={`${
                product?.rating - 3 >= 0 ? "text-yellow-300" : "text-gray-300"
              }`}
            />
            <FaStar
              className={`${
                product?.rating - 4 >= 0 ? "text-yellow-300" : "text-gray-300"
              }`}
            />
            <FaStar
              className={`${
                product?.rating - 5 >= 0 ? "text-yellow-300" : "text-gray-300"
              }`}
            />
            
          </div>
            <a href="#" class="block py-2 px-4 bg-black mb-6 text-white text-center rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">Add to Cart</a>
        </div>
        </Link>
        
    );
}
 */
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaStar } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"; 
import { addToCart } from "../../redux/features/cart/cartSlice.js";

function TopProduct({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity: quantity }));
    toast.success("Added to cart", {
      autoClose: 1000,
    });
  };
  return (
    <>

<div className="relative flex flex-col justify-between h-[430px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
  <Link to={`/product/${product._id}`} className="block w-full max-w-xs mx-auto">
    <div className="flex justify-center items-center p-6 h-64 bg-white ">
      <img
        src={product.images.image1}
        alt={product.name}
        className="h-[210px] w-[160px] object-contain"
      />
    </div>
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
      <p className="text-lg text-gray-700 mb-1">${product.price}</p>
      <div className="flex items-center mb-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-lg ${
              index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-gray-500 ml-1">
          ({product?.numReviews} reviews)
        </span>
      </div>
    </div>
  </Link>
  <button
    className="w-full py-2 px-4 bg-black text-white text-center rounded-b-lg transition duration-300 ease-in-out hover:bg-white hover:text-black border-t border-black"
    onClick={() => handleAddToCart(product, 1)}
  >
    Add to Cart
  </button>
</div>

    
   </>
  );
}

export default TopProduct;
