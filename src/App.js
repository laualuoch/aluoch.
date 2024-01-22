import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import { Router } from "react-router-dom";

function App() {
 
    const navItems = [
      {link:"HOME", linkOnClick: "#home"},
      {link:"ABOUT", linkOnClick: "#about"},
      {link:"PORTFOLIO", linkOnClick: "#portfolio"},
      {link:"BLOG", linkOnClick: "#blog"},
      {link:"CONTACT", linkOnClick: "#contact"}
  ];

  return (
    <>
    <div className="flex flex-col min-h-screen overflow-x-auto">
      <Heading navItems={navItems} />
      <div className="flex-1 p-8">
        {/* <Home sectionId="home" />
        <About sectionId="about" />
        <PortfolioPage sectionId="portfolio" />
        <Blog sectionId="blog"/>
        <Contact sectionId="contact" /> */}
      </div>
      <Footer />
    </div>   
    </>
  );
}

export default App;
