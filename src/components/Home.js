
const engineeringPortfolio = () => {
    //
}

const designPortfolio = () => {
    //
}

const writingPortfolio = () => {
    //
}

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
            <div class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg" >
                <div class="bg-[url(https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg)] h-[400px] w-[400px] relative">
                    <div class="absolute bottom-0 px-4 py-3 bg-cream w-full">
                        <h1 class="text-white font-regular font-chilanka font-semibold text-4xl">Software Engineer</h1>
                        <button 
                        class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded"
                        onClick={engineeringPortfolio}>
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg" >
                <div class="bg-[url(https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg)] h-[400px] w-[400px] relative">
                    <div class="absolute items-center bottom-0 px-4 py-3 bg-beige w-full">
                        <h1 class="text-white font-regular font-chilanka font-semibold text-4xl">Product Designer</h1>
                        <button 
                        class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded"
                        onClick={designPortfolio}>
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-double border-4 border-green hover:border-pink p-20 h-auto max-w-full rounded-lg" >
                <div class="bg-[url(https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg)] h-[400px] w-[400px] relative">
                    <div class="absolute bottom-0 px-4 py-3 bg-jungle w-full">
                        <h1 class="text-white font-regular font-chilanka font-semibold text-4xl">Tech Trainer</h1>
                        <button 
                        class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded"
                        onClick={writingPortfolio}>
                            Visit Blog
                        </button>
                    </div>
                </div>
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