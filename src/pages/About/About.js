import React from "react";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";

const About = () => {
    const aboutItems = [
        {title: "Software Engineering", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["HTML & CSS", "JavaScript", "React.js", "Python", "Kotlin", "Jetpack Compose"]},
        {title: "Product Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["Figma"]},
        {title: "Technical writing", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: []}
    ];

    return (
        <div className= "d-flex flex-wrap">
            {aboutItems.map(({ title, description, tools }) => (
                <Card
                    key={title}
                    title={title}
                    description={description}
                    tools={tools}
                />
            ))}
        </div>
    );
};

export default About;
