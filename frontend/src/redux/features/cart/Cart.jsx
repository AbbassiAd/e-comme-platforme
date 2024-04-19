 import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../../pages/Navigation";
import SecondNavigation from "../../../pages/SecondNavigation";
import { getCartFromLocalStorage } from "../../../utils/localStorageCart";
import ProductCart from "./ProductCart.jsx";
import { useEffect, useState } from "react";
import { setCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
let produitsSelectionners = [];


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = cart;
  const [selectedProducts, setSelectedProducts] = useState([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);
  const updateSelectedProductDetails = (productId, quantity) => {
    const product = cartItems.find(item => item._id === productId);
    if (product) {
      const { _id, name,images, description, price ,quantity} = product;
      const productDetails = { id: _id, name,images, description, price, quantity };
      setSelectedProductDetails([...selectedProductDetails, productDetails]);
    }
  };
  const handleProductSelect = (productId, quantity) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
      updateSelectedProductDetails(productId, quantity);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
      setSelectedProductDetails(selectedProductDetails.filter(product => product.id !== productId));
    }
  };
  useEffect(() => {
    const products = getCartFromLocalStorage();
    dispatch(setCart(products));
  }, [dispatch]);
 


  const calculateSelectedProductsTotal = () => {
    console.log(selectedProducts)
    let total = 0;
    selectedProducts.forEach(productId => {
      const product = cartItems.find(item => item._id === productId);
      if (product) {
        total += product.price * product.quantity;
      }
    });
    return total.toFixed(2);
  };

  const checkoutHandler = () => {
  
   produitsSelectionners= selectedProductDetails;
    userInfo
      ? cartItems.length
        ? navigate("/shipping")
        : ""
      : navigate("/login");
  };

  return (
    <>
      <Navigation />
      <SecondNavigation />
      <div className="mr-2 ml-32 my-6 ">
        <div className="flex justify-between">
          <h1 className="font-medium text-2xl mb-6 tracking-wider">
            Shopping Cart
          </h1>
          <h1 className="mr-6 flex items-center mb-6">
            {cartItems.length} ITEMS
          </h1>
        </div>
        <hr />
        <div className=" w-full h-full flex flex-wrap ">
          <div className="w-[70%] ">
            {cartItems.length === 0 ? (
              <>
                <div className="">Your cart is empty</div>
              </>
            ) : (
              cartItems.map((product) => (
                <div
                  key={product._id}
                  className={`flex items-center ${selectedProducts.includes(product._id) ? '' : 'opacity-50'}`}
                >
                  <input
                  className="w-[30px] h-[30px]"
                    type="checkbox"
                    checked={selectedProducts.includes(product._id)}
                    onChange={() => handleProductSelect(product._id)}
                  />
              <ProductCart className="border" product={product} isSelected={selectedProducts.includes(product._id)} />

                </div>
              ))
            )}
          </div>
          <div className="bg-gray-50 w-[29%] min-h-[71vh] sticky my-2 flex justify-between flex-col">
            <div className="w-full p-4 pt-8">
              <span className="text-2xl font-bold tracking-wider">Summary</span>
            </div>
            <div className="h-[300px] gap-6 p-4 text-xl font-medium flex flex-col text-gray-800">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>29.00 $</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>0.00 $</span>
              </div>
              <div className="flex justify-between">
                <span>SubTotal</span>
                <span>{calculateSelectedProductsTotal()} $</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between py-4">
                <span className="font-medium text-xl">Total </span>
                <span className="font-bold text-2xl">
                  {(Number(calculateSelectedProductsTotal()) + 29).toFixed(2)} $
                </span>
              </div>
              <Link to={`/api/ordre`} >
                <button
                  onClick={checkoutHandler}
                  className={` w-full h-16 text-white tracking-widest font-medium ${
                    !cartItems.length
                      ? "cursor-default bg-gray-300"
                      : "bg-gray-950"
                  } `}
                >
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );


};

export {produitsSelectionners};
export default Cart;
 