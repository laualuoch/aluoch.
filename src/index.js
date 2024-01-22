import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import "./assets/tailwind.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home sectionId="home" />} />
            <Route path="about" element={<About sectionId="about" />} />
            <Route
              path="portfolio"
              element={<Portfolio sectionId="portfolio" />}
            />
            <Route path="blog" element={<Blog sectionId="blog" />} />
            <Route path="contact" element={<Contact sectionId="contact" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
