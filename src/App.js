import logo from './logo.svg';
import './index.css'
import './App.css';
import './components/Menu.js'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <div className='px-100'>
        <div className=''>
          <header className="header">
          <div className=''>
            <img className="object-fill h-32 w-40 hover:object-scale-down" src ={logo}/>
          </div>
          </header>
        </div>

        <div className=''>
            <Menu />
        </div>
      </div>
     
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
