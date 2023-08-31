import React from "react";
import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";

const Blog = ({sectionId}) => {
    const [blogData, setBlogData] = useState([{}]);

    useEffect(()=> {
        fetch('/blog').then(
            res => res.json()
        ).then(
            blogData => {
                setBlogData(blogData)
                console.log(blogData)
            }
        )
    }, [])

    return (
        <section id={sectionId} class="flex items-center justify-center h-screen">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">Blog.</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">Exploring the Tech World One Line at a Time.</p>
                </div> 
                <div class="grid gap-8 lg:grid-cols-2">
                    {(typeof blogData.articles === 'undefined') ? (
                        <Loading />
                    ) : (
                        blogData.articles?.map(({key, category, title, intro, link}) => (
                            <BlogCard
                            key={key}
                            category={category}
                            title={title}
                            intro={intro}
                            link={link} />   
                        ))     
                    )}                    
                </div>  
            </div>
        </section>
    );
    
};

export default Blog;
