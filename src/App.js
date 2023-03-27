import "./App.css";
import Header from "./MyComponents/Header";

import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";

import About from "./MyComponents/About";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
