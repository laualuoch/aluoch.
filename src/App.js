import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import './assets/main.css'
import About from "./pages/About/About";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import More from "./pages/More/More";
import End from "./pages/End/End";

function App() {
  return (
    <div class="App">  
      <section>
        <div class="Section">
          < HomePage />
          <About />
          <PortfolioPage />
          <More />
          <End />
        </div>
      </section>
    </div>
  );
}

export default App;
