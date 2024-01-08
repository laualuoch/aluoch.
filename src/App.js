import React, { useEffect } from "react";
import HomePage from "./pages/Home/HomePage";
import './assets/main.css'
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
 
    const navItems = [
      {link:"Home.", linkOnClick: "#home"},
      {link:"About.", linkOnClick: "#about"},
      {link:"Portfolio.", linkOnClick: "#portfolio"},
      {link:"Blog.", linkOnClick: "#blog"},
      {link:"Contact.", linkOnClick: "#contact"}
  ];

  return (
    <>
    <NavBar navItems={navItems} />
    <div className="container">
      <HomePage sectionId="home" />
    </div>

    <div className="container">
      <About sectionId="about" />
    </div>
    <div className="container">
      <PortfolioPage sectionId="portfolio" />
    </div>
    <div className="container">
      <Blog sectionId="blog"/>
    </div>
    <div className="container">
      <Contact sectionId="contact" />
      </div>
    <Footer />
    </>
  );
}

export default App;
