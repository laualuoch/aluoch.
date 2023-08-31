import React from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import './assets/main.css'
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { Breadcrumb } from "react-bootstrap";

function App() {
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

    const navigateToBlog = () => {
        navigate('/blog');
    }

    const navigateToContact = () => {
        navigate('/contact');
    }

    const navItems = [
      {link:"Home.", linkOnClick: navigateToHome},
      {link:"About.", linkOnClick: navigateToAbout},
      {link:"Portfolio.", linkOnClick: navigateToPortfolio},
      {link:"Blog.", linkOnClick: navigateToBlog},
      {link:"Contact.", linkOnClick: navigateToContact}
  ];

  return (
    <div class="App">  
      <section>
        <HomePage />
      </section>
      <section>
        <About />
      </section>
      <section>
        <PortfolioPage />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
