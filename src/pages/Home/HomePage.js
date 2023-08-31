import React from "react";
import aluoch from "../../images/aluoch.jpg"
import InfoCard from "../../components/InfoCard";

const HomePage = () => {
    const techStack = [
        {text:"JavaScript", projects: "visit project"},
        {text:"Reactjs", projects: "visit project"},
        {link:"Nextjs", projects: "visit project"},
        {link:"Python", projects: "visit project"},
        {link:"Django", projects: "visit project"}
    ];

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center p-6 space-x-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain h-1/4 w-1/4 mb-4 rounded-full"
                            src={aluoch}
                            alt="intro-image"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-3xl lg:text-5xl text-beige font-chilanka font-bold mb-2 lg:mb-4">
                            Hi, I'm <span className="text-white">Aluoch.</span>
                        </h4>
                        <h2 className="text-lg lg:text-xl text-beige font-chilanka font-semibold mb-2 lg:mb-4">
                            Welcome to the digital embodiment of my journey as a versatile
                            software engineer, product designer and a skilled technical
                            writer. This online catalogue provides the different chapters of
                            my professional narrative.
                        </h2>
                        <div>
                            {techStack.map((text) => {
                                <InfoCard text={text} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default HomePage;