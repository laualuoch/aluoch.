
const Link = ({ item, itemOnClick}) => {
    return (
        <>
        <a href={itemOnClick} className="inline-flex items-center p-2 text-lg text-beige border-green hover:text-white font-semibold font-chilanka">
            {item}
        </a>
        <span className="text-beige hover:text-white font-semibold font-chilanka">/</span>
        </>
    );
}

const Breadcrumb = ({navItems}) => {
    
    return (
        <div className=" px-10">
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


export default Breadcrumb;