import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const ProductCart = ({ product, isSelected }) => { 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    setQuantity(product.quantity);
  }, []);

  const handleUpdatePlus = (product, quantity) => {
    setQuantity(quantity + 1);
    dispatch(addToCart({ ...product, quantity: quantity + 1 }));
  };

  const handleUpdateMins = (product, quantity) => {
    setQuantity(quantity - 1);
    dispatch(addToCart({ ...product, quantity: quantity - 1 }));
  };

  return (
    <>
      <div className="h-32 bg-gray-50 my-2 overflow-hidden flex mr-2">
        <div className="w-32 h-32 flex justify-center items-center ">
          <img
            src={product.images.image1}
            alt={product._id}
            className="h-28 object-cover "
          />
        </div>
        <div className="flex flex-col p-1 w-[40%]">
          <span className="pt-4 text-3xl font-medium  ">
            {product.name.toUpperCase()}
          </span>
          <span className="text-gray-600">
            {(product.description.substring(0, 50)).toLowerCase()}...
          </span>
          <span className="pt-2 font-medium">{product.price} $</span>
        </div>

        <div className="w-[25%] flex items-center justify-end gap-16">
          <button
            disabled={!isSelected} // Désactive le bouton si le produit n'est pas sélectionné
            onClick={() => {
              handleUpdateMins(product, quantity);
            }}
            className={`bg-gray-100 h-10 w-10 flex items-center justify-center font-bold text-2xl ${
              !isSelected ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'
            }`}
          >
            -
          </button>
          <div className="text-4xl font-medium">{quantity}</div>
          <button
            disabled={!isSelected || quantity === product.countInStock} // Désactive le bouton si le produit n'est pas sélectionné ou si la quantité est maximale
            onClick={() => {
              handleUpdatePlus(product, quantity);
            }}
            className={`bg-gray-100 h-10 w-10 flex items-center justify-center font-bold text-2xl ${
              !isSelected || quantity === product.countInStock ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'
            }`}
          >
            +
          </button>
        </div>

        <div className="w-[16%] items-center justify-end flex text-2xl font-bold ">
          {(product.price * product.quantity).toFixed(2)} $
        </div>
        <div className="w-[10%] flex items-center justify-center ">
          <IoCloseSharp
            title="remove product from inventory"
            onClick={() => handleDelete(product._id)}
            className="text-gray-500 hover:text-red-600 cursor-pointer size-5"
          />
        </div>
        <span></span>
      </div>
    </>
  );
};

export default ProductCart;
