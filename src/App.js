import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
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
    <HomePage sectionId="home" />
    <About sectionId="about" />
    <PortfolioPage sectionId="portfolio" />
    <Blog sectionId="blog"/>
    <Contact sectionId="contact" />
    <Footer />
    </>
  );
}

export default App;
