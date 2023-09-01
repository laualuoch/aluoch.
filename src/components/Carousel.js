import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrands } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Carousel = ({carouselsData}) => {

  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlides = (slide) => {
    setSlideIndex((prevIndex) => (prevIndex + slide + carouselsData.length) % carouselsData.length);
  };


  return (
    <div className="container mx-auto border p-6 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
                <Link to={carouselData.gitHubLink}>
                  <FontAwesomeIcon icon={faGithubBrands} className="p-2 text-white text-xl cursor-pointer" />
                </Link>
                <Link to={carouselData.hostingLink}>
                  <FontAwesomeIcon icon={faLink} className="p-2 text-white text-xl cursor-pointer" />
                </Link>
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
