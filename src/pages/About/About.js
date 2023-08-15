import React from "react";
import Card from "../../components/Card";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const About = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToAbout = () => {
        navigate('/about');
    }

    const handleButtonClick = () => {
        navigate('/portfolio')
    }

    const navItems = [
        {link:"Home", linkOnClick: navigateToHome},
        {link:"About", linkOnClick: navigateToAbout}
    ];

    const aboutItems = [
        {title: "Software Engineering", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["HTML & CSS", "JavaScript", "React.js", "Python", "Kotlin", "Jetpack Compose"]},
        {title: "Product Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["Figma"]},
        {title: "Technical writing", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: []}
    ];

    return (
        <>
        <Breadcrumb navItems={navItems}/>
        <div className="flex flex-wrap justify-center">
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
        <Button text="Portfolio" onClick={handleButtonClick} />
        </>
       

    );
};

export default About;
