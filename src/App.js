import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SoftwarePage from "./pages/Software/SoftwarePage";
import DesignPage from "./pages/Design/DesignPage";
import BlogPage from "./pages/Blog/BlogPage";
import './assets/main.css'


const getCurrentYear = () => {
  let year= new Date().getFullYear(); 
  return year;

}

function App() {
  return (
    <div class="App">  
      <section>
        <div class="Section bg-green">
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
    </div>
  );
}

export default App;
