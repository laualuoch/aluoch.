import logo from './logo.svg';
import './App.css';
import './components/Menu.js'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="header">
      <p>Logo</p>
      </header>
      <nav className="main-nav">
        <Menu />
      </nav>
      <section className="socials-nav">
      <p>Socials</p>
      </section>
      <section className="Resume">
      <p>Resume</p>
      </section>
      <section className="portfolio">
      <p>Portfolio</p>
      </section>
      <section className="work-with-me">
      <p>Work with</p>
      </section>
      <footer className="footer">
      <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
