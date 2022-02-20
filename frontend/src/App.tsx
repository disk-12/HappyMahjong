import { color } from "assets/color";
import { DemoCameraPage } from "pages/DemoCamera/DemoCameraPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Top, Result, Check, CameraPage, Select, Option, Load } from "./pages";
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
          <Route path="/option" element={<Option />} />
          <Route path="/result" element={<Result />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/load" element={<Load />} />
          <Route path="/demo" element={<DemoCameraPage />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};
