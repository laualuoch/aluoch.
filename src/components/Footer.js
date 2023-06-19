
const Footer = ({currentYear}) => {
    return (
        <footer class="dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="" class="hover:underline"></a>. Designed and Developed by Aluoch Laurine.</span>
            </div>
        </footer>
    )
}

export default Footer;