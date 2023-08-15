import React, { useState } from 'react';
import image1 from  "../images/image-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrands } from '@fortawesome/free-brands-svg-icons';

const carouselsData = [
  { src: image1, caption: 'Caption Text', title:"flipCard Game", description:"A single player flipcard built using Bootsrap and React Js"},
  { src: image1, caption: 'Caption Two', title:"dairyYetu", description:"An e-commerce site built using PHP(Laravel), and Bootstrap" },
  { src: image1, caption: 'Caption Three', title:"aluoch.", description:"A professional portfolio designed in Figma and built using ReactJs and Tailwind CSS" },
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
                <h1>{carouselData.title}</h1>
                <p>{carouselData.description}</p>
                <FontAwesomeIcon icon={faGithubBrands} className="p-2 text-white text-xl cursor-pointer" />
                <FontAwesomeIcon icon={faLink} className="p-2 text-white text-xl cursor-pointer" />
              </div>
            </div>
            <img
              src={carouselData.src}
              alt={`Slide ${index + 1}`}
              className=" object-contain h-200 w-full"
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
