import { useNavigate } from "react-router-dom"
import Hamburger from "../../components/Hamburger";

const SoftwareItems = () => {
    return (
        <div
        id="software-engineering"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide>
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active>
                    <div class= "col-span-3">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/007.webp"
                            class="block w-full"
                            alt="Wild Landscape" />
                        <div
                            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 class="text-xl">DairyYetu</h5>
                            <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                                    See More..
                            </button>
                        </div>
                    </div>
                    <div class= "col-span-1">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/007.webp"
                            class="block w-full"
                            alt="Wild Landscape" />
                        <div
                            class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 class="text-xl">DairyYetu</h5>
                            <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                                    See More..
                            </button>
                        </div>

                    </div>
                    
                </div>
            <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/020.webp"
                    class="block w-full"
                    alt="Camera" />
                <div
                    class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">PC Labs</h5>
                    <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                            See More..
                    </button>
                </div>
            </div>
            <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/050.webp"
                    class="block w-full"
                    alt="Exotic Fruits" />
                <div
                    class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 class="text-xl">Eunoia Chic</h5>
                    <button class="bg-green hover:bg-pink text-white font-regular font-chilanka py-2 px-4 border border-blue-700 rounded">
                            See More..
                    </button>
                </div>
            </div>
        </div>
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="prev">
            <span class="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </span>
            <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
                Previous
            </span>
        </button>
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="next">
            <span class="inline-block h-8 w-8">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </span>
            <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
                Next
            </span>
        </button>
    </div>  
    )
};

const SoftwarePage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToEngineering = () => {
        navigate('/engineering-portfolio');
    }

    const navItems = [
        {link:"HOME", linkOnClick: navigateToHome},
        {link:"SOFTWARE PROJECTS", linkOnClick: navigateToEngineering}
    ];

    return (
        <>
        <Hamburger navItems={navItems} />
        <SoftwareItems />
        </>
    )

};

export default SoftwarePage;