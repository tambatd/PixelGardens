import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Garden from "./pages/garden/garden";
import FlowerList from "./pages/flowerList/flowerList";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Garden" element={<Garden />} />
        <Route path="/Flowers" element={<FlowerList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
