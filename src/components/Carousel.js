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
    <div className="relative w-full" >
      {carouselsData.map((carouselData, index) => (
        <div
          key={index}
          className={`${index === slideIndex ? 'block' : 'hidden'} width="100%" h-3/4 w-full`}
        >
          <img src={carouselData.src}  alt={`Slide ${index + 1}`} />
          <h2>{carouselData.caption}</h2>
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
  );
};

export default Carousel;
