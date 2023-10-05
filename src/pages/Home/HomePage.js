import React from "react";
import aluoch from "../../images/aluoch.jpg"
import { InfoCard } from "../../components/Cards";

const HomePage = ({sectionId}) => {
    const techStack = [
        {text:"JavaScript", projects: "visit project"},
        {text:"Reactjs", projects: "visit project"},
        {text:"Nextjs", projects: "visit project"},
        {text:"Python", projects: "visit project"},
        {text:"Django", projects: "visit project"},
        {text:"Kotlin", projects: "visit project"},
        {text:"Jetpack Compose", projects: "visit project"}
    ];

    return (
        <section id={sectionId} class="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
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
                                writer. I am <span className="text-white font-bold">currently looking for a new role </span>
                                that will challenge me. I am also a part time student at
                                <span className="text-white font-bold"> The University of East London </span>
                                pursuing my <span className="text-white font-bold">Master's</span> in 
                                <span className="text-white font-bold"> Computer Science</span>
                            </h2>
                            <div className="flex flex-wrap mt-4 justify-center w-full">
                                <h4 className="text-xl lg:text-3xl text-white font-chilanka font-bold mb-2 lg:mb-4">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap mt-4 justify-center w-full">
                                    {techStack?.map(({text})=> (
                                        <InfoCard text={text} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );    
}

export default HomePage;