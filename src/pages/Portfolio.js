import React from "react";
import image1 from  "./../images/aluoch-dev.png";
import image3 from  "./../images/flipper.png";
import { PortfolioCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";

const Portfolio = ({sectionId}) => {
    const portfolioData = [
        { src: image3, title: "Flipper Card Game", description:"A single player flip card game built in ReactJs and Bootstrap. Utilizes Lottie files for image optimization and animation.", hostingLink:"https://flippcard-app.vercel.app/", gitHubLink:"https://github.com/aluoch-dev/flipcard-game", tools: ["Reactjs", "Bootstrap", "Lottie Files"]},
        { src: image1, title: "Portfolio Website", description:"A professional portfolio designed in Figma and built using ReactJs and Tailwind CSS. The app is designed to mirro a single screen design.", hostingLink: "https://aluoch.vercel.app/", gitHubLink: "https://github.com/aluoch-dev/aluoch.", tools: ["Reactjs", "Tailwind CSS", "Python"]},
        { src: image3, title: "Klassify", description:"An image classification system built using Python and Kivy to enable users upload images for accurate image analysis and outcomes recorded.", hostingLink:"https://flippcard-app.vercel.app/", gitHubLink:"https://github.com/aluoch-dev/flipcard-game", tools: ["Python", "Kivy","PostgreSQL"]},
        { src: image1, title: "Bookish Mobile App", description:"An Android App that facilitates notes organization from users reads. The app is built using Kotlin, Jetpack Compose, and utilizes Firebase for storage. Design is done on Figma.", hostingLink: "https://aluoch.vercel.app/", gitHubLink: "https://github.com/aluoch-dev/aluoch.", tools: ["Android", "Kotlin", "Jetpack Compose"]},
        { src: image3, title: "dairyYetu e-commerve Web", description:"An e-commerce site that allows small scale farmers to sell dairy products to users and facilitate delivery to the specific homes. The application is built in Laravel, and Boostrap. Design is done in Figma", hostingLink:"https://flippcard-app.vercel.app/", gitHubLink:"https://github.com/aluoch-dev/flipcard-game", tools: ["Laravel", "Bootstrap", "MySQL"]},
        { src: image1, title: "Productively Mobile App", description:"A cross platform Mobile App built in React Native for both ios, and android. The project is currently ongoing... ", hostingLink: "https://aluoch.vercel.app/", gitHubLink: "https://github.com/aluoch-dev/aluoch.", tools: ["React Native", "Styled-components", "Nodejs"]}
    ];
      
    return (
        <section id={sectionId} className="flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <SectionHeader
                title="PORTFOLIO"
                description="Elevating Ideas Through Design and Innovation: Explore My Portfolio"
                />
                <div className="flex flex-wrap justify-center w-full">
                    {portfolioData.map(({ title, description, tools }) => (
                        <PortfolioCard
                            key={title}
                            title={title}
                            description={description}
                            tools={tools}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                        />
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Portfolio;