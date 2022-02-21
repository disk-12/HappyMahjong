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

const IMG_HEIGHT = 120

export const ImgBox = styled.div`
  height:${IMG_HEIGHT}px;
  overflow:hidden;
  position: relative;
`;
export const Img = styled.img`
  position:absolute;
  display: block;
  top: ${IMG_HEIGHT / 2}px;
  left: 0;
  width: 100%;

  transform: translate(0, -50%);
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

export const TextPopup = styled.div`
  position: fixed;
  width: fit-content;
  background: ${color.White};
  border-radius: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  padding: 8px 16px;
  transform: translate(-50%, 0px) translate(8px, 0px);
`;
