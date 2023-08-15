import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

const About = () => {

    const aboutItems = [
        {title: "Software Engineering", description: "My approach to software engineering entails gathering user needs, designing solutions, testing designs, and developing. Followed by continuous iteration. I develop both Android and Web Apps", tools: ["HTML & CSS", "JavaScript", "React.js", "Python", "Kotlin", "Jetpack Compose"]},
        {title: "Product Design", description: "As a product designer, I leverage user needs and proven techniques that not only ensure minimalistic aesthetic designs but also, functional designs that meet user needs. I design for physical and digital products.", tools: ["Figma"]},
        {title: "Technical writing", description: "Technical writing is a process that is at the core of my expertise. My first role post my undergraduate degree entailed research writing focusing on the Technical domain. As a technical writer, research and continuous learning are at my core. I write on topics related to my tech stack.", tools: []}
    ];

    return (
        <>
            <div className="flex flex-col h-screen justify-center">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center h-3/4">
                    <div className="flex flex-wrap justify-center w-full">
                        {aboutItems.map(({ title, description, tools }) => (
                            <Card
                                key={title}
                                title={title}
                                description={description}
                                tools={tools}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button text="Portfolio" />
                    </div>
                </div>
            </div>
        </>
    );
    
};

export default About;
