import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";

import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Service from "./components/services/services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
