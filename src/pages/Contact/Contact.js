import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
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

    const navigateToEnd = () => {
        navigate('/end');
    }

    const navItems = [
        {link:"Home.", linkOnClick: navigateToHome},
        {link:"About.", linkOnClick: navigateToAbout},
        {link:"Portfolio.", linkOnClick: navigateToPortfolio},
        {link:"Blog.", linkOnClick: navigateToMore},
        {link:"Contact.", linkOnClick: navigateToEnd}
    ];

    return (
        <>
        <Breadcrumb navItems={navItems} />
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center p-6 space-x-8">
                    <div className="flex flex-col justify-center items-center justify-centerp-6">
                        <h4 className="text-5xl text-beige font-chilanka font-bold mb-4">
                            Thanks, for <span className="text-white">Visiting.</span>
                        </h4>
                        <ContactForm />
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    );    
}

export default Contact;