import '../assets/main.css'
import logo from '../images/logo.svg';

const LogoItem = ({logoItem, href}) => {
    return (
        <div className="flex items-center flex-shrink-0 pl-4">
            <a href={href}>
                <img className="h-20 w-100 hover:object-scale-down"
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
        className="nav-link"
        > 
            {section}
        </a>
    )
};

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	        <div className="container">
                <a className="navbar-brand" href="">Aluoch.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <MenuItem section="ABOUT" href="" />
                        </li>
                        <li className="nav-item active">
                            <MenuItem section="SKILLS" href="" />
                        </li>
                        <li className="nav-item">
                            <MenuItem section="PROJECTS" href="" />
                        </li>
                        <li className="nav-item">
                        <MenuItem section="HIRE ME" href="" />
                        </li>
                    </ul>
                </div>
	        </div>
	  </nav>       
    );
};

export default Menu;
