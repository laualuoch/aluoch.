
const Footer = () => {
    const getCurrentYear = () => {
        let year= new Date().getFullYear(); 
        return year;
      
    }
    return (
        <footer class="sticky p-4 bottom-0 z-50 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span class="text-lg py-4 px-2 border-green hover:text-pink font-regular font-chilanka block sm:text-center dark:text-gray-400">©{getCurrentYear()}. Designed and Developed by Aluoch Laurine.</span>
        </div>
      </footer>  
    )
}

export default Footer;