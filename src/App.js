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
  Route,
} from "react-router-dom";

const getCurrentYear = () => {
  let year= new Date().getFullYear(); 
  return year;

}

function App() {
  return (
    <div class="App">  
     <BrowserRouter> 
        <header>
          <Menu />
        </header>

        <section>
        <div class="Section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software" element={<Software />} />
            <Route path="/design" element={<Design />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        </section>

        <section class="work-with-me">
        </section>
        <footer class="footer">
          <Footer currentYear={getCurrentYear()} />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
