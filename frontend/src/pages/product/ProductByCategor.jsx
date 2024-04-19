/* import { useParams } from "react-router";
import { useGetProductByCategorieQuery } from "../../redux/api/productApiSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../Navigation.jsx";
export default function ProductByCategory() {
    const { id } = useParams();

    const { data: ProductsByCategory } = useGetProductByCategorieQuery(id);

    if (!ProductsByCategory) {
        return <div>No products available for this category</div>;
    }

  
 
    
    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <div className="text-center my-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Products By Category
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ProductsByCategory.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                            <div className="flex justify-center items-center p-6 h-64">
                                <img src={product.images.image1} alt={product.name} className="h-auto w-2/3" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="mt-2 text-lg font-bold">${product.price} <FontAwesomeIcon icon={faShoppingCart} className="ml-1" /></p>
                                <button className=" bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  inset-y-0 right-0" onClick={() => addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
    
}
 */
import React from "react";
import { useParams } from "react-router";
import { useGetProductByCategorieQuery } from "../../redux/api/productApiSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../Navigation";

export default function ProductByCategory() {
    const { id } = useParams();

    const { data: productsByCategory, isLoading, isError } = useGetProductByCategorieQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    if (!productsByCategory || productsByCategory.length === 0) {
        return <div>No products available for this category</div>;
    }

    const addToCart = (product, quantity) => {
        dispatch(addToCart({ ...product, quantity: quantity }));
        toast.success("Added to cart", {
          autoClose: 1000,
        });
      };

    return (
        <>
            <Navigation />
            <div className="container mx-auto">
    <div className="text-center my-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Products By Category
        </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsByCategory.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:scale-105">
                <div className="flex justify-center items-center p-6 h-64 bg-gray-1">
          <img
            src={product.images.image1}
            alt={product.name}
            className="h-[200px] w-[160px] object-contain"
          />
        </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="mt-2 text-lg font-bold">${product.price}</p>
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mt-4 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => addToCart(product,1)}>
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>

        </>
    );
}
