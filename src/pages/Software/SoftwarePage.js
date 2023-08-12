import { useNavigate } from "react-router-dom"
import Hamburger from "../../components/Breadcrumb";
import CarouselSlider from "../../components/CarouselSlider";

const SoftwareItems = () => {

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
        <CarouselSlider  />
    )
};

const SoftwarePage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToEngineering = () => {
        navigate('/engineering-portfolio');
    }

    const navItems = [
        {link:"HOME", linkOnClick: navigateToHome},
        {link:"SOFTWARE PROJECTS", linkOnClick: navigateToEngineering}
    ];

    return (
        <>
        <Hamburger navItems={navItems} />
        <SoftwareItems />
        </>
    )

};

export default SoftwarePage;