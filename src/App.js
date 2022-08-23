import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SellStorage from "./pages/SellStorage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sell-your-self-storage" element={<SellStorage />}></Route>
      </Routes>
    </>
  );
}

export default App;
