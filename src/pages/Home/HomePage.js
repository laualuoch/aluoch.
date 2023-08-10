import { useNavigate} from "react-router-dom";
import HomeRoleItem from "./HomeRoleItem";

const Hamburger = () => {
    return (
        <nav class="flex pl-20 pr-20 text-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <a href="#" class="inline-flex items-center text-lg text-green py-4 px-2 border-green hover:text-pink font-regular font-chilanka sm:text-center dark:text-gray-400">
                    HOME
                </a>
            </ol>
        </nav>
    );
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
        <Hamburger />
        <HomeItems />
        </>
    )

};

export default HomePage;