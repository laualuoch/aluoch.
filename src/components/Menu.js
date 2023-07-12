import '../assets/main.css'
import logo from '../images/logo.svg';

const LogoItem = ({logoItem, href}) => {
    return (
        <div class="flex items-center flex-shrink-0 pl-4">
            <a href={href}>
                <img class="h-20 w-100 hover:object-scale-down"
                src ={logoItem}
                alt='Aluoch Laurine Logo'/>
            </a>
        </div>
    )
};

const MenuItem = ({section, href}) => {
    return (
        <a 
        href={href}
        class="text-lg text-green py-4 px-2 border-green hover:text-pink font-regular font-chilanka"
        > 
            {section}
        </a>
    )
};

const Menu = () => {
    return (
        <nav class="sticky p-4 top-0 z-50 shadow-sm">
            <div class="flex flex-row justify-between items-center">
                <div class="ml-16">
                    <LogoItem logoItem={logo} href="#home" />
                </div>

                <div class="mr-16" >
                    <MenuItem section= "HIRE ME!" href="#hire-me"/>
                </div>
            </div>
        </nav>
    )
};

export default Menu;
