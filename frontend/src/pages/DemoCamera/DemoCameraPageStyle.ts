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
  position:relative;
`

export const ButtonWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
export const DemoImage = styled.img`
  display:block;
  width:100%;
  transform: translate(0px, -25%);
}


`;

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
