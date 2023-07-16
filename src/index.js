import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Software from "./components/Software";
import Design from "./components/Design";
import Writing from "./components/Writing";
import './assets/main.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/engineering-portfolio" element={<Software />} />
          <Route path="/design-portfolio" element={<Design />} />
          <Route path="/writing-portfolio" element={<Writing />} />
        </Routes>
    </Router>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
