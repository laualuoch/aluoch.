
const HamburgerLink = ({ item, itemOnClick}) => {
    return (
        <a href={itemOnClick} class="inline-flex items-center text-lg text-green py-4 px-2 border-green hover:text-pink font-regular font-chilanka sm:text-center dark:text-gray-400">
            {item}
        </a>
    );
   
}

export default HamburgerLink;