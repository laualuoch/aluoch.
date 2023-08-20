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

    // const blogData = [
    //     {category: "Python", title: "Mastering Python Errors, Exceptions, and Exception Handling: A Comprehensive Guide - Part One", intro: "In the Tiobe Index Report as of 2023, Python is the most widely used programming language. This is considerably so given the simplicity and versatility of the language. Now, as a developer, it is important to build robust applications that are not only functional but also efficient."},
    //     {category: "Python", title: "Mastering Python Errors, Exceptions, and Exception Handling: A Comprehensive Guide - Part Two", intro: "In the previous article, we mentioned that in Python programming, there are two distinguishable Errors; syntax errors and exceptions. In this article, we are going to explore exceptions, taking a dive into the different exceptions and how to handle them. "},
    //     ];

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
                    {blogData.map(({category, title, intro, link}) => (
                        <BlogCard
                        category={category}
                        title={title}
                        intro={intro}
                        link={link} />   
                    ))};         
                </div>  
            </div>
        </section>
        <Footer />
        </>
    );
    
};

export default Blog;
