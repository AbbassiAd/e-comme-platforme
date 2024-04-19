/* // Dans DecovrirCategory.js
import React, { useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '../redux/api/categoryApiSlice';
import { Link } from "react-router-dom";
import Slider from "react-slick";


function DecovrirCategory() {
    const { data: categoryList, isLoading, isError } = useGetAllCategoriesQuery();
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
   

    useEffect(() => {
        if (categoryList) {
            setCategories(categoryList);
        }
    }, [categoryList]);

   
    const settings = {
        infinite: true,
        slidesToShow: 5,
        speed: 400,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching categories</div>;

    return (
        <>
   

        <>
      
            <section className="py-16 bg-gray-100">
                <div className=" container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Discover Categories</h2>
                    <div className='relative'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Slider {...settings}>
    {categories.map(category => (
        <Link key={category.id} to={`/products/category/${category._id}`} >
            <div className="text-center">
                <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden bg-white shadow-md flex justify-center items-center" style={{ width: '200px', height: '200px' }}>
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4 mb-2">{category.name}</h3>
                </div>
            </div>
        </Link>
    ))}
  

    </Slider>
</div>


                       
                    </div>
                </div>
            </section>

        
            
        </>
        </>
    );
}

export default DecovrirCategory;
 */
import React, { useState, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '../redux/api/categoryApiSlice';
import { Link } from "react-router-dom";
import Slider from "react-slick";

function DecovrirCategory() {
    const { data: categoryList, isLoading, isError } = useGetAllCategoriesQuery();
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
   
    useEffect(() => {
        if (categoryList) {
            setCategories(categoryList);
        }
    }, [categoryList]);

    const settings = {
        infinite: true,
        slidesToShow: 5,
        speed: 400,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching categories</div>;

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Discover Categories</h2>
                <div className="relative">
                    <Slider {...settings}>
                        {categories.map(category => (
                            <Link key={category.id} to={`/products/category/${category._id}`} className="focus:outline-none">
                                <div className="text-center">
                                    <div className="rounded-full overflow-hidden bg-white shadow-md flex justify-center items-center w-48 h-48 mx-auto">
                                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-lg font-semibold mt-4 mb-2">{category.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default DecovrirCategory;
