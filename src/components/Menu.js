import '../index.css'
import logo from '../logo.svg';

const LogoItem = ({logoItem}) => {
    return (
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img class="mr-4 h-8 w-10 hover:object-scale-down" src ={logoItem}/>
        </div>
    )
};

const MenuItem = ({section}) => {
    return (
        <a 
        href="#responsive-header" 
        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        > 
            {section}
        </a>
    )
};

const Menu = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
           <LogoItem logoItem={logo} />
            <MenuItem section= "HOME"/>
            <MenuItem section= "ABOUT"/>
            <MenuItem section= "RESUME"/>
            <MenuItem section= "PORTFOLIO"/>
            <MenuItem section= "HIRE ME"/>
        </nav>
    )
}

export default Menu;