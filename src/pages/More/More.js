import React from "react";
import Card from "../../components/Card";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const More = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToAbout = () => {
        navigate('/about');
    }
    const navigateToPortfolio = () => {
        navigate('/portfolio');
    }

    const navigateToMore = () => {
        navigate('/more');
    }

    const handleButtonClick = () => {
        navigate('/more');
    }

    const navItems = [
        {link:"Home", linkOnClick: navigateToHome},
        {link:"About", linkOnClick: navigateToAbout},
        {link:"Portfolio", linkOnClick: navigateToPortfolio},
        {link:"Etc.", linkOnClick: navigateToMore}
    ];

    const aboutItems = [
        {title: "Software Engineering", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["HTML & CSS", "JavaScript", "React.js", "Python", "Kotlin", "Jetpack Compose"]},
        {title: "Product Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled i", tools: ["Figma"]}
    ];

    return (
        <>
            <Breadcrumb navItems={navItems} />
            <div className="flex flex-col h-screen justify-center">
                <div className="container mx-auto px-4 shadow-lg flex flex-col items-center justify-center h-3/4">
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
                        <Button text="Portfolio" onClick={handleButtonClick} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
    
};

export default More;
