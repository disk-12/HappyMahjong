import { color } from "assets/color";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Top, Result, Check, CameraPage, Select } from "./pages";
const Background = styled.div`
  width: 100%;
  height: 100%;
  //overflow: hidden;
  background: ${color.MainGreen};
`;
export const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/check" element={<Check />} />
          <Route path="/select" element={<Select />} />
          <Route path="/result" element={<Result />} />
          <Route path="/camera" element={<CameraPage />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};
