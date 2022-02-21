import { color } from "assets/color";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${color.MainGreen};
`;

export const CameraWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${color.MainGreen};
`

export const BUTTON_WRAPPER_WIDTH = 48;

export const ButtonWrapper = styled.div`
  position: relative;
  width: ${BUTTON_WRAPPER_WIDTH}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

const Button = css`
  display: block;
  background: ${color.Surface1};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  &:active {
    background: ${color.Selected};
  }
`

export const CaptureButton = styled.button`
  ${Button}
  width: 64px;
  height: 80px;
  padding: 24px 16px;
  transform: translateX(-24px);
`

export const SwitchButton = styled.button`
  ${Button}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: 8px;
  transform: translateX(-24px) translateY(-100px);
`

export const HaiGuide = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  transform: translateY(200px);
`
export const HaiGuideWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 2px 12px -2px rgba(45, 49, 51, 0.8));
  gap: 1px;
`

export const HaiGuideText = styled.div`
  color: ${color.White};
  font-size: 16px;
  font-weight: bold;
  text-shadow: 0px 2px 12px rgba(45, 49, 51, 0.8);
`