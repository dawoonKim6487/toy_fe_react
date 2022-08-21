import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sub } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home>home</Home>} />
        <Route path="/sub" element={<Sub>서브</Sub>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
