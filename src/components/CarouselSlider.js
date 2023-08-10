import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider = () => {
    return (
      <Carousel showArrows={true} >
                <div class= "col-span-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/008.webp"
                    class="block w-full"
                    alt="Wild Landscape" />
                  <div
                    class="absolute inset-x-[15%] bg-beige bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Project 1</h5>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                    <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                            See More..
                    </button>
                  </div>
                </div>
                <div class= "col-span-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/008.webp"
                    class="block w-full"
                    alt="Wild Landscape" />
                  <div
                    class="absolute inset-x-[15%] bg-beige bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Project 2</h5>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                    <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                            See More..
                    </button>
                  </div>
                </div>
                <div class= "col-span-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/008.webp"
                    class="block w-full"
                    alt="Wild Landscape" />
                  <div
                    class="absolute inset-x-[15%] bg-beige bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Project 3</h5>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                    <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                            See More..
                    </button>
                  </div>
                </div>
      </Carousel>
    )

}

// const CarouselSlider = ({carouselItemList}) => {
//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//              {carouselItemList.map(({image, title, description, buttonAction}) => {
//                 <CarouselItems 
//                     image={image}
//                     title = {title}
//                     description={description}
//                     buttonAction={buttonAction}
//                 />
//              })}
//         </div>
//     );
// }

// {image, title, description, buttonAction}

export default CarouselSlider;