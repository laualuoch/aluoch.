import React from "react";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import NavBar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const navigateToAbout = () => {
        navigate('/about');
    }
    const navigateToPortfolio = () => {
        navigate('/portfolio');
    }

    const navigateToMore = () => {
        navigate('/more');
    }

    const navigateToEnd = () => {
        navigate('/end');
    }

    const navItems = [
        {link:"Home.", linkOnClick: navigateToHome},
        {link:"About.", linkOnClick: navigateToAbout},
        {link:"Portfolio.", linkOnClick: navigateToPortfolio},
        {link:"Blog.", linkOnClick: navigateToMore},
        {link:"Contact.", linkOnClick: navigateToEnd}
    ];

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
        <>
        <NavBar navItems={navItems} />
        <section>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">Blog.</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">Exploring the Tech World One Line at a Time.</p>
                </div> 
                <div class="grid gap-8 lg:grid-cols-2">
                    {blogData.articles?.map(({key, category, title, intro, link}) => (
                        <BlogCard
                        key={key}
                        category={category}
                        title={title}
                        intro={intro}
                        link={link} />   
                    ))}      
                </div>  
            </div>
        </section>
        <Footer />
        </>
    );
    
};

export default Blog;
