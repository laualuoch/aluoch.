import './index.css'
import './App.css';
import './components/Menu.js'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header class="h-16 bg-white sticky top-0">
        <Menu />
      </header>

      <section className="socials-nav">
      </section>
      <section className="Resume">
      </section>
      <section className="portfolio">
      </section>
      <section className="work-with-me">
      </section>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
