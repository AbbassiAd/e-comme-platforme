import { useNavigate, useParams } from "react-router";
import { useGetProductByIdQuery } from "../../redux/api/productApiSlice.js";
import Navigation from "../Navigation.jsx";
import SecondNavigation from "../SecondNavigation.jsx";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddReviewMutation } from "../../redux/api/productApiSlice.js";
import { toast } from "react-toastify";
import moment from "moment";
import Footer from "../Footer.jsx";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const { data: product, refetch } = useGetProductByIdQuery(params.id);
  const { userInfo } = useSelector((state) => state.auth);
  const [addReview] = useAddReviewMutation();

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const [quantity, setQuantity] = useState(1);

  const handleAddReview = async () => {
    try {
      const res = await addReview({
        data: { rating, comment },
        id: params.id,
      }).unwrap();
      setRating("");
      setComment("");
      setState(2);
      refetch();
      return toast.success(res.message);

      //
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const clear = () => {
    setRating("");
    setComment("");
  };

  const [state, setState] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThumbnailClick = (imageSrc) => {
    document.getElementById("principaleImage").src = imageSrc;
  };

  const addHandler = (quantity, product) => {
    dispatch(addToCart({ ...product, quantity: Number(quantity) }));
    toast.success("Product added successfully to cart", {
      autoClose: 1000,
    });
  };

  return (
    <>
      <Navigation />
      <SecondNavigation disable={true} />
      <div className="flex h-[77vh] ">
      <div className="bg-gray-50 h-full w-[50%] flex justify-center items-center relative">
  {product?.images && (
    <div className="absolute mt-[550px] flex">
      {Object.entries(product.images).map(([key, image], index) => (
        image && (
          <img
            key={index}
            src={image}
            alt=""
            className="w-12 h-12 m-2 border border-gray-400"
            onMouseOver={() => handleThumbnailClick(image)}
          />
        )
      ))}
    </div>
  )}
  <img
    id="principaleImage"
    src={product?.images.image1}
    alt={product?.name}
    className="h-auto max-h-[400px] w-auto mt-[80px] drop-shadow-[0_15px_15px_rgba(0,0,0.5)]"
  />
</div>



        <div className="h-full w-[50%] flex flex-col px-10 py-[60px] ">
          <span className="font-medium text-5xl font-[arial] h-[60px] w-full relative">
            {product?.name.toUpperCase()}
          </span>

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
            <span className="text-gray-500">
              ({product?.numReviews} reviews)
            </span>
          </div>

          <div className="mt-4 mr-10" title={product?.description}>
            {product?.description.substring(0, 915)}...
          </div>

          <div className="my-4 text-4xl font-medium">
            $ {product?.price.toFixed(2)}
          </div>

          <div className="flex justify-between pt-4 mr-10 w-full">
            {product?.countInStock > 1 && (
              <div className="w-[29%]">
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full outline-none p-2 border border-gray-300 rounded-md"
                >
                  <option defaultValue={1}>Select Quantity</option>
                  {[...Array(product.countInStock).keys()].map((item) => (
                    <option key={item + 1} value={item + 1}>
                      {item + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div
              className="hover:bg-black rounded text-center flex items-center justify-center w-[70%] cursor-pointer bg-gray-900"
              onClick={() => addHandler(Number(quantity), product)}
            >
              <span className="text-white">Add To Cart</span>
              <FiShoppingCart className="ml-2 text-white" />
            </div>
          </div>
          <Link to={`/api/ordre`} className="text-white flex items-center" >

        <div className=" mt-[30px]  justify-center w-[70%] ml-[226px] hover:bg-orange-300 rounded text-center flex items-center justify-center h-[40px] w-[400px] cursor-pointer bg-orange-400">
          <span>Acheter</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag ml-[8px]" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
        </div>
      </Link>
        </div>
      </div>
      <div className="pb-10 bg-gray-50">
        <div className="flex gap-6 justify-center pt-10 ">
          <h1
            onClick={() => setState(1)}
            className={`cursor-pointer ${
              state === 1 ? "text-black font-medium" : "text-gray-400"
            } `}
          >
            Products You Might Also Like
          </h1>
          <h1
            onClick={() => setState(2)}
            className={`cursor-pointer ${
              state === 2 ? "text-black font-medium" : "text-gray-400"
            } `}
          >
            Reviews
          </h1>
          <h1
            onClick={() => setState(3)}
            className={`cursor-pointer ${
              state === 3 ? "text-black font-medium" : "text-gray-400"
            } `}
          >
            Add Review
          </h1>
        </div>
        {state === 1 && <></>}
        {state === 2 && (
          <>
            <div className="flex justify-center items-center flex-col m-10 gap-4">
              <h1 className="text-left w-[800px] font-medium text-2xl pb-4">
                All Reviews
              </h1>
              {product?.reviews?.map((review) => (
                <div
                  key={Math.random()}
                  className="w-[800px] bg-white shadow-sm md:shadow-lg rounded-lg "
                >
                  <div className="flex mb-2">
                    <FaUserCircle className="w-[60px] h-[60px] m-6 text-gray-200 " />
                    <div className="mt-6 flex flex-col">
                      <div>
                        <span className="font-medium text-[18px] ">
                          {review.name}
                        </span>
                        {"   • "}
                        <span className="text-gray-500 text-[15px]">
                          {moment(review.createdAt).fromNow()}{" "}
                        </span>
                        <div className="flex gap-1">
                          <FaStar
                            className={`${
                              review?.rating - 1 >= 0
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                          />
                          <FaStar
                            className={`${
                              review?.rating - 2 >= 0
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                          />
                          <FaStar
                            className={`${
                              review?.rating - 3 >= 0
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                          />
                          <FaStar
                            className={`${
                              review?.rating - 4 >= 0
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                          />
                          <FaStar
                            className={`${
                              review?.rating - 5 >= 0
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="mt-1">
                        <div className="text-gray-800 text-[15px] max-w-[630px] mb-2 ">
                          {review.comment}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {state === 3 && (
          <>
            {userInfo ? (
              <>
                <div className="flex justify-center items-center flex-col m-10 gap-2">
                  <h1 className="text-left w-[653px] font-medium text-2xl pb-4">
                    Add Review
                  </h1>
                  <select
                    placeholder="rating..."
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="rounded p-4 w-[653px] outline-none focus:border shadow-sm md:shadow-lg text-gray-500"
                  >
                    <option value="0" selected>
                      --Select your rating--
                    </option>
                    <option value="1">Inferior</option>
                    <option value="2">Decent</option>
                    <option value="3">Great</option>
                    <option value="4">Excellent</option>
                    <option value="5">Exceptional</option>
                  </select>
                  <textarea
                    rows="8"
                    placeholder="message content..."
                    className="text-gray-500 rounded p-4 resize-none outline-none focus:border w-[653px] shadow-sm md:shadow-lg"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="w-[323px] p-2 bg-gray-500 text-white "
                      onClick={clear}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-[323px] p-2 bg-black text-white "
                      onClick={handleAddReview}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>{navigate("/login")}</>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
