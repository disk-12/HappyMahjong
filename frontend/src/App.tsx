import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top, Result, Check, CameraPage } from "./pages";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/check" element={<Check />} />
          <Route path="/result" element={<Result />} />
          <Route path="/camera" element={<CameraPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
