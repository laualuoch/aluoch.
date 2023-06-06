import '../assets/main.css'
import logo from '../images/logo.svg';

const LogoItem = ({logoItem}) => {
    return (
        <div className="flex items-center flex-shrink-0 pl-4">
            <img class="h-8 w-10 hover:object-scale-down" 
            src ={logoItem}
            alt='Aluoch Laurine Logo'/>
        </div>
    )
};

const MenuItem = ({section}) => {
    return (
        <a 
        href="#responsive-header" 
        className="text-sm font-thin text-black pl-4 hover:bg-white hover "
        > 
            {section}
        </a>
    )
};

const Menu = () => {
    return (
        <nav className="sticky p-8 top-0 z-50 bg-pink-100">
            <div className="flex items-center flex-shrink-0 mr-6">
            <LogoItem logoItem={logo} />
            </div>

            <div className="hidden md:block">
                <div className="flex space-x-4 items-baseline">
                    <MenuItem section= "HOME"/>
                    <MenuItem section= "ABOUT"/>
                    <MenuItem section= "RESUME"/>
                    <MenuItem section= "PORTFOLIO"/>
                    <MenuItem section= "HIRE ME"/>
                </div>
            </div>
        </nav>
    )
};

export default Menu;