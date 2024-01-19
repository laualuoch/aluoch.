import { HashLink as Link } from "react-router-hash-link";

const LinkItem = ({ item, itemOnClick}) => {
    return (
        <Link to={itemOnClick} smooth className="block mt-4 lg:inline-block lg:mt-0 text-beige p-2 text-lg hover:text-white font-lato">
            {item}
        </Link>
    );
}


const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col flex-wrap p-6">
            <h6 className="p-4 font-lato text-white text-bold text-5xl md:text-3xl sm:text-xl hover:text-pink">LAURINE ALUOCH</h6>
            <h5 className="p-4 font-lato text-white hover:text-pink">SOFTWARE ENGINEER | PRODUCT DESIGNER | TECHNICAL WRITER</h5>
        </div>
    );
}

const Navigation = ( {navItems}) => {
    return (
        <>
         <nav class="container mx-auto flex items-center justify-between flex-wrap">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                {
                    //Socials
                }
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
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
                {navItems.map(({link, linkOnClick}) => {
                          return (
                              <LinkItem
                                  item={link}
                                  itemOnClick={linkOnClick}
                              />
                          );
                      })}

                    <a href="#resp" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
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