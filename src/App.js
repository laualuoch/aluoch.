import React from "react";
import './assets/main.css'

import Menu from './components/Menu';
import Footer from './components/Footer'
import HomePage from "./pages/Home/HomePage";
import SoftwarePage from "./pages/Software/SoftwarePage";
import DesignPage from "./pages/Design/DesignPage";
import BlogPage from "./pages/Blog/BlogPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const getCurrentYear = () => {
  let year= new Date().getFullYear(); 
  return year;

}

function App() {
  return (
    <div class="App">  
      <header>
        <Menu />
      </header>

      <section>
        <div class="Section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/engineering-portfolio" element={<SoftwarePage />} />
            <Route path="/design-portfolio" element={<DesignPage />} />
            <Route path="/writing-portfolio" element={<BlogPage />} />
          </Routes>
        </div>
      </section>

      <section class="work-with-me">
      </section>
      
      <footer class="footer">
        <Footer currentYear={getCurrentYear()} />
      </footer>
    </div>
  );
}

export default App;
