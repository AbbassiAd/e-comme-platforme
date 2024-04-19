import { useSelector } from "react-redux";
import Navigation from "../../../pages/Navigation.jsx";
import SecondNavigation from "../../../pages/SecondNavigation.jsx";
import ProductCard from "../../../pages/product/ProductCard.jsx";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <Navigation />
      <SecondNavigation />
      <div className="mr-20 ml-32 my-6 ">
        <h1 className="font-medium text-2xl mb-6">Favorites</h1>
        <hr />
        <div className=" w-full h-full flex flex-wrap ">
          {favorites.map((product) => (
            <ProductCard
            className="border"
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
