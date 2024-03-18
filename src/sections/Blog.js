import React from "react";
import { BlogCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";

const Blog = ({sectionId}) => {

    const blogData = [
        { category: "Python", title: "Mastering Python Errors, Exceptions, and Exception Handling: A Comprehensive Guide - Part One", intro: "In the Tiobe Index Report as of 2023, Python is the most widely used programming language. This is considerably so given the simplicity and versatility of the language. Now, as a developer, it is important to build robust applications that are not only functional but also efficient.", link:"https://medium.com/@aluoch/part-one-python-errors-exceptions-and-exception-handling-a-comprehensive-guide-aa9b75772adf"},
        { category: "JavaScript", title: "Demystifying asynchronous programming in JavaScript", intro: "JavaScript is synchronous by nature, which means operations are executed in the chronological order that they are called. The implication of the synchronous nature of JavaScript is the delay in execution as long-running tasks are run to completion before proceeding ones are executed.", link:"https://medium.com/@aluoch/demystifying-asynchronous-programming-in-javascript-80e18145d117" }
    ]

    return (
        <section id={sectionId} className="flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <SectionHeader
                title="BLOG"
                description="Exploring the Tech World One Line at a Time."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                    {
                        blogData.map(({key, category, title, intro, link}) => (
                            <BlogCard
                                key={key}
                                category={category}
                                title={title}
                                intro={intro}
                                link={link} 
                            />   
                        ))     
                    }                    
                </div>  
            </div>
        </section>
    ); 
};

export default Blog;
