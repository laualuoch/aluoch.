import React from "react";
import portfolio from  "./../images/aluoch-dev.png";
import flipper from  "./../images/flipper.png";
import dairyYetu from "./../images/dairyYetu.png"
import { PortfolioCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";

const Portfolio = ({sectionId}) => {
    const portfolioData = [
        { src: flipper, title: "FLIPPER CARD GAME", description:"A single player flip card game built in ReactJs and Bootstrap. Utilizes Lottie files for image optimization and animation.", hostingLink:"https://flippcard-app.vercel.app/", githubLink:"https://github.com/aluoch-dev/flipcard-game", tools: ["Reactjs", "Bootstrap", "Lottie Files"]},
        { src: portfolio, title: "PERSONAL PORTFOLIO WEBSITE", description:"A professional portfolio designed in Figma and built using ReactJs and Tailwind CSS. The app is designed in alignment with minimalism in mind for ease of access.", hostingLink: "https://aluoch.vercel.app/", githubLink: "https://github.com/aluoch-dev/aluoch.", tools: ["Reactjs", "Tailwind CSS", "Python"]},
        { src: "", title: "KLASSIFY IMAGE CLASSIFICATION APP", description:"An image classification system built using Python and Kivy to enable users upload images for accurate image analysis and outcomes recorded.", hostingLink:"", gitHubLink:"https://github.com/aluoch-dev/Klassify", tools: ["Python", "Kivy","PostgreSQL"]},
        { src: "", title: "BOOKISH MOBILE APP", description:"An Android App that facilitates notes organization from users reads. The app is built using Kotlin, Jetpack Compose, and utilizes Firebase for storage. Design is done on Figma.", hostingLink: "", githubLink: "https://github.com/aluoch-dev/book-ish", tools: ["Android", "Kotlin", "Jetpack Compose", "Firebase"]},
        { src: dairyYetu, title: "DAIRYYETU E-COMMERCE WEBSITE", description:"An e-commerce site that allows small scale farmers to sell dairy products to users and facilitate delivery to the specific homes. The application is built in Laravel, and Bootstrap. Design is done in Figma", hostingLink:"", githubLink:"https://github.com/aluoch-dev/dairyYetu", tools: ["Laravel", "Bootstrap", "MySQL"]},
    ];
      
    return (
        <section id={sectionId} className="flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <SectionHeader
                title="PORTFOLIO"
                description="Elevating Ideas Through Design and Innovation: Explore My Portfolio"
                />
                <div className="flex flex-wrap justify-center w-full">
                    {portfolioData.map(({ title, description, tools, src, hostingLink, githubLink }) => (
                        <PortfolioCard
                            image={src}
                            key={title}
                            title={title}
                            description={description}
                            tools={tools}
                            hostingLink={hostingLink}
                            githubLink={githubLink}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                        />
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Portfolio;