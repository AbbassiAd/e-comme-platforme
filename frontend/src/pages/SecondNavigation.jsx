import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import FavoritesCount from "../redux/features/favorites/FavoritesCount";

const SecondNavigation = ({ disable }) => {
  return (
    <>
      <div className="sticky z-10 top-0 bg-white border-b w-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="w-full box-sizing h-[55px] flex justify-between ">
          <div className="flex justify-between ml-[10rem] ">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search products here..."
                className="border p-2 outline-none w-[300px] rounded"
              />
              {disable ? (
                <button
                  disabled
                  className="cursor-not-allowed border h-[42px] w-[42px] flex items-center justify-center  text-gray-600 rounded"
                >
                  <IoSearchSharp />
                </button>
              ) : (
                <button className="border h-[42px] w-[42px] flex items-center justify-center bg-gray-800 text-white hover:bg-white hover:text-black rounded">
                  <IoSearchSharp />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-between mr-[10rem] ">
            <Link className="relative flex justify-around px-6" to={"/favorites"}>
              <FaHeart title="favorites" className="h-[25px] mt-3 mb-3" />
              <FavoritesCount />
            </Link>

            <Link className="flex justify-around px-6" to={"/cart"}>
              <FaShoppingCart title="cart" className="h-[25px] mt-3 mb-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondNavigation;
