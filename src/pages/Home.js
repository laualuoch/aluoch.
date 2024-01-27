import React from "react";
import { InfoCard } from "../components/Cards";
import aluoch from './../images/aluoch.jpg'

const Home = ({sectionId}) => {
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
        <section id={sectionId} class="flex items-center justify-center p-6">
            <div className="flex flex-col items-center justify-center">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row  md:flex-col sm:flex-col items-center justify-center p-6 space-x-8">
                        <div className="flex items-center justify-center">
                            <img
                                className="object-contain h-1/4 w-1/4 mb-4 rounded-full"
                                src={aluoch}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center w-3/4">
                            <p className="text-lg lg:text-xl text-beige font-lato mb-2 lg:mb-4">
                                I am a user-centric sofwtare engineer who enjoys crafting solutions 
                                with the end user in mind. I am a naturally observant and empathtic 
                                individual, making the process quite straightforward. 
                            </p>
                            <p className="text-lg lg:text-xl text-beige font-lato mb-2 lg:mb-4">
                                I am currently a part time student at
                                <span className="text-white text-lg lg:text-xl"> The University of East London </span>
                                pursuing my <span className="text-white text-lg lg:text-xl">Master's Degree</span> in 
                                <span className="text-white text-lg lg:text-xl"> Computer Science.</span>
                            </p>
                            <div className="flex flex-wrap mt-4 justify-start w-full">
                            <p className="text-lg lg:text-xl text-beige font-lato mb-2 lg:mb-4">
                                I have worked with nultiple technologies including:
                            </p>
                                <div className="flex flex-wrap mt-4 justify-start w-full">
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

export default Home;