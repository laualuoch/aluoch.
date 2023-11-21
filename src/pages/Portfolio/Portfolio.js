import React from "react";
import Carousel from "../../components/Carousel";
import image1 from  "../../images/aluoch-dev.png";
import image2 from  "../../images/heatmap.png";
import image3 from  "../../images/flipper.png";


const PortfolioItems = () => {
    const carouselsData = [
        { src: image3, title: "flipper.", description:"A single player flip card game built in ReactJs and Boostrap. Utilizes Lottie files for image optimization and animation.", hostingLink:"https://flippcard-app.vercel.app/", gitHubLink:"https://github.com/aluoch-dev/flipcard-game"},
        { src: image1, title:"aluoch.", description:"A professional portfolio designed in Figma and built using ReactJs and Tailwind CSS", hostingLink: "https://aluoch.vercel.app/", gitHubLink: "https://github.com/aluoch-dev/aluoch."}
    ];
      

    return (
       <Carousel carouselsData={carouselsData}/>
    )
};

const Portfolio = ({sectionId}) => {
    return (
        <section id={sectionId} class="flex items-center justify-center h-screen">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">Portfolio.</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">Elevating Ideas Through Design and Innovation: Explore My Portfolio</p>
                </div> 
                <div className="flex flex-wrap justify-center w-full">
                    <PortfolioItems />
                </div>
            </div>
        </section>
    );

};

export default Portfolio;