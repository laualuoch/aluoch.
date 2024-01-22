import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

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
    <Heading navItems={navItems} />
    <Home sectionId="home" />
    <About sectionId="about" />
    <PortfolioPage sectionId="portfolio" />
    <Blog sectionId="blog"/>
    <Contact sectionId="contact" />
    <Footer />
    </>
  );
}

export default App;
