import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb";
import Carousel from "../../components/Carousel";

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

const PortfolioPage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToPortfolio = () => {
        navigate('/portfolio');
    }

    const navItems = [
        {link:"Home", linkOnClick: navigateToHome},
        {link:"Portfolio", linkOnClick: navigateToPortfolio}
    ];

    return (
        <>
        <Breadcrumb navItems={navItems} />
        <PortfolioItems />
        </>
    )
};

export default PortfolioPage;