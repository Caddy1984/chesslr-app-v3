import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Academy from "./Pages/Academy";
import Home from "./Pages/Home";
import Lobby from "./Pages/Lobby";
import NoPage from "./Pages/NoPage";
import Support from "./Pages/Support";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
