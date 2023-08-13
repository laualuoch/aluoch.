import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SoftwarePage from './pages/Software/SoftwarePage';
import DesignPage from './pages/Design/DesignPage';
import BlogPage from './pages/Blog/BlogPage';
import './assets/main.css';
import About from './pages/About/About';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/engineering-portfolio" element={<SoftwarePage />} />
          <Route path="/design-portfolio" element={<DesignPage />} />
          <Route path="/writing-portfolio" element={<BlogPage />} />
        </Routes>
    </Router>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
