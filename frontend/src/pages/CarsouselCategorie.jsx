import React, { useState } from 'react';

import Slider from 'rc-slider';
import SliderControl from   "react-slick";
import { useGetAllCategoriesQuery } from '../redux/api/categoryApiSlice';

function Carousel() {
    const { data: categoryList, isLoading, isError } = useGetAllCategoriesQuery();
    const [currentSlide, setCurrentSlide] = useState(0);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching categories</div>;

    const handlePreviousClick = () => {
        setCurrentSlide(currentSlide === 0 ? categoryList.length - 1 : currentSlide - 1);
    };

    const handleNextClick = () => {
        setCurrentSlide(currentSlide === categoryList.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className='slider' aria-labelledby="carousel-heading">
            <h3 id="carousel-heading" className="visuallyhidden">Discover Categories</h3>
          
            <ul className="slider__wrapper" style={{ 'transform': `translateX(-${currentSlide * (100 / categoryList.length)}%)` }}>
                {categoryList.map((category, index) => (
                    <Slider
                        key={index}
                        slide={category}
                        current={currentSlide}
                        handleSlideClick={() => setCurrentSlide(index)}
                    />
                ))}
            </ul>

            <div className="slider__controls">
                <SliderControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <SliderControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}

export default Carousel;
