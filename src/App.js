import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SellStorage from "./pages/SellStorage";
import FreeEvaluation from "./pages/FreeEvaluation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sell-your-self-storage" element={<SellStorage />}></Route>
        <Route path="/free-evaluation" element={<FreeEvaluation />}></Route>
      </Routes>
    </>
  );
}

export default App;
