import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import './assets/main.css'
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import More from "./pages/More/More";
import End from "./pages/End/End";


const getCurrentYear = () => {
  let year= new Date().getFullYear(); 
  return year;

}

function App() {
  return (
    <div class="App">  
      <section>
        <div class="Section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/more" element={<More />} />
            <Route path="/end" element={<End />} />
          </Routes>
        </div>
      </section>

      <section class="work-with-me">
      </section>
    </div>
  );
}

export default App;
