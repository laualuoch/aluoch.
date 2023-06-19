import React from "react";
import './assets/main.css'
import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './components/Home'

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
        <Home />
      </section>

      <section class="socials-nav">
      </section>
      <section class="Resume">
      </section>
      <section class="portfolio">
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
