
const Footer = () => {
    const getCurrentYear = () => {
        let year= new Date().getFullYear(); 
        return year;
      
    }
    return (
        <footer classname="bg-green sticky bottom-0 shadow-md">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 justify-end">
                <span class="text-beige font-bold text-lg py-4 px-2 border-green hover:text-white font-regular font-chilanka block text-end sm:text-center dark:text-gray-400">©{getCurrentYear()}. Designed and Developed by Aluoch Laurine.</span>
            </div>
      </footer>  
    )
}

export default Footer;