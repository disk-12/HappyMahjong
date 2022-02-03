import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top, Result, Check } from "./pages";
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/check" element={<Check />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
