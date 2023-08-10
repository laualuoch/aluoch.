

const HamburgerLink = ({ item, itemOnClick}) => {
    return (
        <a href={itemOnClick} class="inline-flex items-center text-lg text-green py-4 px-2 border-green hover:text-pink font-regular font-chilanka sm:text-center dark:text-gray-400">
            {item}
        </a>
    );
   
}

const Hamburger = ({navItems}) => {
    
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


export default Hamburger;