import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import "./assets/tailwind.css";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
