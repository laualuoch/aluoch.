import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './assets/main.css';
import About from './pages/About/About';
import PortfolioPage from './pages/Portfolio/Portfolio';
import More from './pages/More/More';
import End from "./pages/End/End";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/more" element={<More />} />
          <Route path="/end" element={<End />} />
        </Routes>
    </Router>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
