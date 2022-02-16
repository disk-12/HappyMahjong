import { color } from "assets/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${color.Black};
  color: ${color.White};
`;

export const ScreenShot = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
