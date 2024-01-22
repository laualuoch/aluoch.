import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { useState } from "react";

function Layout() {

  const [pageContent, setPageContent] = useState('home');
 
  const navItems = [
    { id: 'home', label:"HOME", link: "/" },
    { id: 'about', label:"ABOUT", link: "/about" },
    { id: 'portfolio', label:"PORTFOLIO", link: "/portfolio" },
    { id: 'blog', label:"BLOG", link: "/blog" },
    { id: 'contact', label:"CONTACT", link: "/contact" }
  ];

  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-auto">
      <Heading navItems={navItems} onSelectItem={setPageContent} />
      <div className="flex-1 p-8">
        <Outlet />
        {/* <Home sectionId='home' />
        <About sectionId='about' />
        <PortfolioPage sectionId='portfolio' />
        <Blog sectionId='blog' />
        <Contact sectionId='contact' /> */}
        {/* {pageContent === 'home' && <Home sectionId='home' />}
        {pageContent === 'about' &&  <About sectionId='about' />}
        {pageContent === 'portfolio' && <PortfolioPage sectionId='portfolio' />}
        {pageContent === 'blog' && <Blog sectionId='blog' />}
        {pageContent === 'contact' &&  <Contact sectionId='contact' /> } */}
      </div>
      <Footer />
    </div>   
    </>
  );
}

export default Layout;
