import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Dashboard from "./layouts/Dashbaord";
import BitcoinPage from "./layouts/Bitcoin";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/bitcoin" element={<BitcoinPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
