import '../assets/main.css'
import logo from '../images/logo.svg';

const LogoItem = ({logoItem}) => {
    return (
        <div class="flex items-center flex-shrink-0 pl-4">
            <img class="h-8 w-10 hover:object-scale-down" 
            src ={logoItem}
            alt='Aluoch Laurine Logo'/>
        </div>
    )
};

const MenuItem = ({section, href}) => {
    return (
        <a 
        href={href}
        class="text-lg text-green py-4 px-2 border-green hover:text-pink font-thin"
        > 
            {section}
        </a>
    )
};

const Menu = () => {
    return (
        <>
            <nav class="flex flex-row sticky p-8 top-0 z-50 shadow-lg">
                <div class="basis-1/4 items-center flex-shrink-0 mr-6">
                    <LogoItem logoItem={logo} />
                </div>

                <div class="basis-3/4 shrink items-end md:block">
                    <div class="flex space-x-4 items-baseline">
                        <MenuItem section= "HOME" href="#home"/>
                        <MenuItem section= "ABOUT" href="#about"/>
                        <MenuItem section= "RESUME" href="#resume"/>
                        <MenuItem section= "PORTFOLIO" href="#portfolio"/>
                        <MenuItem section= "HIRE ME" href="#hire-me"/>
                    </div>
                </div>
            </nav>
        </>
        
    )
};

export default Menu;
