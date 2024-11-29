import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./blog";
import Home from "./Home";
import "../src/style.scss";

function App() {
  return (
    <div>
      <Router>
        {" "}
        {/* Используем Router для обертки маршрутов */}
        <Navbar /> {/* Навигация будет отображаться на всех страницах */}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Маршрут для главной страницы */}
          <Route path="/Blog" element={<Blog />} />{" "}
          {/* Маршрут для страницы "О нас" */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
