import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Breadcrumb from "../../components/Breadcrumb";
import aluoch from "../../images/aluoch.jpg"
import Footer from "../../components/Footer";
import About from "../About/About";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const handleButtonClick = () => {
        navigate('/about')
    }

    const navItems = [
        {link:"Home", linkOnClick: navigateToHome}
    ];

    return (
        <>
        <Breadcrumb navItems={navItems} />
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto px-4 shadow-lg">
                <div className="flex items-center justify-center p-6 space-x-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="object-contain h-1/4 w-1/4 mb-4 rounded-full"
                            src={aluoch}
                            alt="intro-image"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-5xl text-beige font-chilanka font-bold mb-4">
                            Hi, I'm <span className="text-white">Aluoch.</span>
                        </h4>
                        <h2 className="text-xl text-beige font-chilanka font font-semibold mb-4">
                            Welcome to the digital embodiment of my journey as a versatile
                            software engineer, product designer and a skilled technical
                            writer. This online catalogue provides the different chapters of
                            my professional narrative.
                        </h2>
                        <h2 className="text-xl text-beige font-chilanka font font-semibold mb-4">
                            Outside of Work, I enjoy Reading (all sorts of books), and people-watching. I also 
                            have a balcony garden that keeps me busy, sometimes watering or just watching the plants. 
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center p-6 mt-4 mb-4">
                    <Button text="About" onClick={handleButtonClick} />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );    
}

export default HomePage;