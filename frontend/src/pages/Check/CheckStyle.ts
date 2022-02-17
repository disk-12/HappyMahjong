import { color } from "assets/color";
import styled from "styled-components";
export const CheckPage = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
`;
export const HaiContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LinkContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;
export const HaiBox = styled.div`
  padding: 0 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const ImgBox = styled.img`
`;
export const Img = styled.img`
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
export const Triganle = styled.div`
  height: 0px;
  width: 0px;
  margin-top: 8px;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid ${color.White};
`;
export const PopupContainer = styled.div`
  position: absolute;
  z-index: 10;
`;
export const PopupSpace = styled.div`
  position: relative;
  width: 100%;
`;
