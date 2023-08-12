import { useNavigate} from "react-router-dom";
import HomeRoleItem from "./HomeRoleItem";
import Hamburger from "../../components/Hamburger";


const SkillsPage = () => {
    const navigate = useNavigate();
    
    const navigateToEngineering = () => {
        navigate('/engineering-portfolio');
    }

    const navigateToDesign = () => {
        navigate('/design-portfolio');
    }

    const navigateToWriting = () => {
        navigate('/writing-portfolio')
    }

    const userRoles = [
        {role:"Software Engineer", navigationAction:navigateToEngineering, buttonText: "View Portfolio"},
        {role:"Product Designer", navigationAction:navigateToDesign, buttonText: "View Portfolio"},
        {role:"Tech Writer", navigationAction: navigateToWriting, buttonText: "Visit Blog"},
    ];

    return (
        <div class="flex flex-col md:flex-row justify-between items-center gap-2 p-2 md:p-10 lg:pl-20 lg:pr-20 pt-5 md:pt-10 pb-5 md:pb-10">
            {userRoles.map(({role, navigationAction, buttonText}) => {
                return (
                    <HomeRoleItem
                        userRole ={role}
                        onClickButton={navigationAction}
                        buttonText={buttonText}
                    />
                );
            })}
        </div>
    );
};

const HomePage1 = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }
    const navItems = [
        {link:"HOME", linkOnClick: navigateToHome}
    ];

    return (
        <>
        <Hamburger navItems={navItems} />
        <HomeItems />
        </>
    )

};

export default HomePage1;