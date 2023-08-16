import { useNavigate } from "react-router-dom"
import NavBar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import image1 from  "../../images/aluoch-dev.png";
import image2 from  "../../images/heatmap.png";
import image3 from  "../../images/flipcard.png";


const PortfolioItems = () => {

    const carouselsData = [
        { src: image1, title:"aluoch.", description:"A professional portfolio designed in Figma and built using ReactJs and Tailwind CSS", hostingLink: "https://aluoch.vercel.app/", gitHubLink: "https://github.com/aluoch-dev/aluoch."},
        { src: image2, title:"heatmap", description:"An implementation of the Google Heatmap Layer as a data visualization tool mapping patient data. Built using JavaScript.", gitHubLink: "https://github.com/aluoch-dev/heatMap"},
        { src: image3, description:"A single player flipcard built using Bootsrap and React Js", hostingLink:"https://flippcard-app.vercel.app/", gitHubLink:"https://github.com/aluoch-dev/flipcard-game"}
      ];
      

    return (
       <Carousel carouselsData={carouselsData}/>
    )
};

const Portfolio = () => {
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
        <div className="container flex flex-col items-center p-8 mx-auto">
            <div className="mt-4 flex items-center">
            <PortfolioItems />
            </div>
            <div className="mt-4 flex flex-col items-center">
                
                <Button text="I read and write too..." onClick={navigateToMore} />
            </div>
        </div>
        <Footer />
        </>
    );

};

export default Portfolio;