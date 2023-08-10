import { useNavigate} from "react-router-dom";
import HomeRoleItem from "./HomeRoleItem";
import HamburgerLink from "../../components/HamburgerLink";

const HamburgerItems = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }
    const navItems = [
        {link:"HOME", linkOnClick: navigateToHome},
        {item:"HOME", linkOnClick: navigateToHome}
    ];

    return (
        <nav className="flex pl-20 pr-20 text-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                {navItems.map(({link, linkOnClick}) => {
                    return (
                        <HamburgerLink
                            item={link}
                            itemOnClick={linkOnClick}
                        />
                    );
                })}
            </ol>
        </nav>
    )
}

const HomeItems = () => {
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
        <div class="flex flex-row justify-between items-center gap-2 pl-20 pr-20 pt-10 pb-10">
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

const HomePage = () => {
    

    return (
        <>
        <HamburgerItems />
        <HomeItems />
        </>
    )

};

export default HomePage;