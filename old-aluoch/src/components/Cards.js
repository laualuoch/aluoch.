import React from "react";
import { FaLink, FaGithub} from "react-icons/fa6";

export function InfoCard({text}) {
    return (
        <span class="bg-green text-white font-lato border border-white inline-block rounded-full px-3 py-1 text-sm  mr-2 mb-2">{text}</span>
    );
}


export function PortfolioCard({title, description, tools, image, hostingLink, githubLink} ) {
    return (
        <div class="max-w-sm overflow-hidden shadow-lg rounded border-spacing-1 m-3">
            <div className="flex justify-between items-center px-6 mb-4">
                {!hostingLink ? 
                    <div>
                        {/* the link icon shouldnt be displayed */}
                    </div>
                : (
                    <a href={hostingLink} target="_blank" rel="noopener noreferrer">
                        <FaLink className="text-white text-2xl md:text-xl sm:text-lg xs:text- hover:text-pink" />
                    </a>
                )}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-2xl md:text-xl sm:text-lg xs:text- hover:text-pink" />
                </a>
            </div>
            <div className="">
                <img src={image} alt="" />
            </div>
            <div className="px-6 py-4">
                <div class="font-bold text-beige font-lato text-l mb-2">{ title }</div>
                <p class="text-gray-700 font-nunito text-base">{ description }</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tools?.map((text) => (
                    <InfoCard text={text} />
                ))}
            </div>
        </div>
);
}


export function BlogCard ({category, title, intro, link}) {
    return (
        <article class="p-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-jungle">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="bg-primary-100 text-primary-800 text-primary-600 font-medium font-lato inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 text-beige">
                        {category}
                    </span>
                </div>
                <h2 class="mb-5 text-2xl text-gray-200 text-center font-lato font-bold">{title}</h2>
                <p class="mb-5 font-light text-gray-500 font-lato dark:text-gray-400">{intro}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">

                    </div>
                    <a href={link} class="inline-flex items-center font-medium  font-lato text-primary-600 text-beige hover:underline">
                        Read more
                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
        </article>  
    );
};


export function AboutCard({title, description, tools}) {
    return (
        <div class="max-w-sm overflow-hidden shadow-lg border-spacing-1 p-6 m-3 rounded-lg hover:bg-jungle">
            <div class="px-6 py-4">
                <div class="font-bold text-black font-lato text-xl mb-2">{ title }</div>
                <p class="text-gray-700  font-lato text-base">
                    { description }
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {tools?.map((text) => (
                    <InfoCard text={text} />
                ))}
            </div>
        </div>

    );
}
