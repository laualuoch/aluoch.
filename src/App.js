import React from "react";
import './assets/main.css'

import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './components/Home'
import Software from './components/Software'
import Design from './components/Design'
import Writing from './components/Writing'

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
            <Route path="/" element={<Home />} />
            <Route path="/engineering-portfolio" element={<Software />} />
            <Route path="/design-portfolio" element={<Design />} />
            <Route path="/writing-portfolio" element={<Writing />} />
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
