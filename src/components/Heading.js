import { HashLink as Link } from "react-router-hash-link";
import { FaMedium,  FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex items-center space-x-4 mb-6 md:justify-center sm:justify-center xs:justify-center">
            <a href="https://www.linkedin.com/in/aluoch-laurine/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white text-2xl hover:text-pink" />
            </a>
            <a href="https://github.com/aluoch-dev" target="_blank" rel="noopener noreferrer">
               <FaGithub className="text-white text-2xl md:text-xl sm:text-lg xs:text- hover:text-pink" />
            </a>
            <a href="https://medium.com/@aluoch-laurine" target="_blank" rel="noopener noreferrer">
                <FaMedium className="text-white text-2xl hover:text-pink" />
            </a>
            <a href="https://twitter.com/aluoch_dev" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-white text-2xl hover:text-pink" />
            </a>
        </div>
    );
}

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col flex-wrap p-6">
            <h6 className="p-4 font-lato text-white font-black text-5xl md:text-3xl sm:text-xl xs:text-lg hover:text-pink">LAURINE ALUOCH</h6>
            <h5 className="p-4 font-lato text-white hover:text-pink">SOFTWARE ENGINEER | PRODUCT DESIGNER | TECHNICAL WRITER</h5>
        </div>
    );
}

const LinkItem = ({ item, itemOnClick}) => {
    return (
        <Link to={itemOnClick} smooth className="inline-block lg:mt-0 text-beige p-2 text-lg hover:text-white font-lato">
            {item}
        </Link>
    );
}

const Navigation = ( {navItems}) => {
    return (
        <>
         <nav class="container mx-auto flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
            </div>

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow md:justify-center md:items-center sm:justify-center xm:items-center xs:justify-center xs:items-center">
                    {navItems.map(({link, linkOnClick}) => {
                          return (
                              <LinkItem
                                  item={link}
                                  itemOnClick={linkOnClick}
                              />
                          );
                      })}
                </div>
                <div>
                <Socials />
                </div>
            </div>
        </nav>
        </>

    )
}


const Heading = ( {navItems}) => {
    return (
        <header className="bg-green sticky top-0">
            <Intro />
            <Navigation navItems={navItems} />
        </header>

    );
};

export default Heading;