

const Hamburger = () => {
    return (
        <nav class="flex pl-20 pr-20 text-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <a href="#" class="inline-flex items-center text-lg text-green py-4 px-2 border-green hover:text-pink font-regular font-chilanka sm:text-center dark:text-gray-400">
                    HOME
                </a>
            </ol>
        </nav>
    )
};

const HomeItems = () => {
    return (
        <div class="flex flex-row justify-between items-center gap-2 pl-20 pr-20 pt-10 pb-10">
        <div>
            <img class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
        </div>

        <div>
            <img class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg"  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
        </div>
    </div>
    )
};

const Home = () => {
    return (
        <>
        <Hamburger />
        <HomeItems />
        </>
    )

};

export default Home;