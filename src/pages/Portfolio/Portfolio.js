import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Button from "../../components/Button";


const PortfolioItems = () => {

    const navigate = useNavigate();

    const navigateToProjectOne = () => {
        navigate('/');
    }

    // const softwareProjectsData = [
    //     {image:"https://mdbcdn.b-cdn.net/img/new/slides/007.webp", title: "Project 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown", buttonAction: navigateToProjectOne},
    //     {image:"https://mdbcdn.b-cdn.net/img/new/slides/008.webp", title: "Project 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown", buttonAction: navigateToProjectOne},
    //     {image:"https://mdbcdn.b-cdn.net/img/new/slides/009.webp", title: "Project 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown", buttonAction: navigateToProjectOne}
    // ]

    return (
       <Carousel />
    )
};

const Portfolio = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToPortfolio = () => {
        navigate('/portfolio');
    }

    const navigateToAbout = () => {
        navigate('/about');
    }

    const navigateToMore = () => {
        navigate('/more');
    }

    

    return (
        <div className="container flex flex-col items-center p-8 mx-auto">
            <div className="mt-4 flex items-center">
            <PortfolioItems />
            </div>
            <div className="mt-4 flex flex-col items-center">
                
                <Button text="I read and write too..." onClick={navigateToMore} />
            </div>
        </div>
    );

};

export default Portfolio;