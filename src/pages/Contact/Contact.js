import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import ContactForm from "../../components/ContactForm";
import Socials from "../../components/Socials";

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
        <NavBar navItems={navItems} />
        <section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">Contact.</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">Let's Code the Future Together: Reach Out and Connect!</p>
                </div> 
                <div>
                    <Socials />
                </div>
                <div className="flex flex-wrap justify-center w-full">
                    <ContactForm />
                </div>
            </div>
        </section>
        <Footer />
        </>
    );    
}

export default Contact;