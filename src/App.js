import React from "react";
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
    <section>
      <HomePage id="home" />
    </section>
    <section>
      <About id="about" />
    </section>
    <section>
      <PortfolioPage id="portfolio" />
    </section>
    <section>
      <Blog id="blog"/>
    </section>
    <section>
      <Contact id="contact" />
    </section>
    <Footer />
    </>
  );
}

export default App;
