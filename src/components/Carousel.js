import React, { useState } from 'react';

import image1 from  "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";

const carouselsData = [
  { src: image1, caption: 'Caption Text' },
  { src: image2, caption: 'Caption Two' },
  { src: image3, caption: 'Caption Three' },
];

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlides = (slide) => {
    setSlideIndex((prevIndex) => (prevIndex + slide + carouselsData.length) % carouselsData.length);
  };


  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full">
        {carouselsData.map((carouselData, index) => (
          <div
            key={index}
            className={`${index === slideIndex ? 'block' : 'hidden'} h-3/4 w-full relative`}
          >
           <div className="absolute bottom-0 px-2 md:px-4 py-2 md:py-3 bg-beige w-full flex justify-between">
            <div className="text-white font-regular font-chilanka font-regular text-sm md:text-xl">
            <h1> DairyYetu</h1>
            <p>A single player flipcard built using Bootsrap and React Js</p>
            <button className="bg-green hover:bg-pink text-white font-regular font-chilanka py-1 md:py-2 px-2 md:px-4 border border-blue-700 rounded">
                Read
              </button>
            </div>
            <div className="flex items-center">
              <button className="bg-green hover:bg-pink text-white font-regular font-chilanka py-1 md:py-2 px-2 md:px-4 border border-blue-700 rounded">
                GB
              </button>
              <button className="bg-green hover:bg-pink text-white font-regular font-chilanka py-1 md:py-2 px-2 md:px-4 border border-blue-700 rounded">
                Link
              </button>
            </div>
          </div>

            <img
              src={carouselData.src}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
  
        <a
          className="mx-6 cursor-pointer absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={() => moveSlides(-1)}
        >
          ❮
        </a>
        <a
          className="mx-6 cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={() => moveSlides(1)}
        >
          ❯
        </a>
      </div>
    </div>
  );
  
  
}

export default Carousel;
