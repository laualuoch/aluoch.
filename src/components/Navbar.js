
const Link = ({ item, itemOnClick}) => {
    return (
        <>
        <a href={itemOnClick} onClick={itemOnClick} className="inline-flex items-center p-2 text-lg text-beige border-green hover:text-white font-bold font-chilanka">
            {item}
        </a>
        </>
    );
}

const NavBar = ({navItems}) => {
    
    return (
        <div className="container mx-auto px-4">
            <ul class="py-3">
                {navItems.map(({link, linkOnClick}) => {
                    return (
                        <Link
                            item={link}
                            itemOnClick={linkOnClick}
                        />
                    );
                })}
            </ul>
        </div>
    )
}


export default NavBar;