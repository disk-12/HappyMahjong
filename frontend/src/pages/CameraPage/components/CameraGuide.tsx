import { FC } from "react";
import { color } from "assets/color";
import styled, { css } from "styled-components";
import { BUTTON_WRAPPER_WIDTH } from "../CameraPageStyle";

const BORDER = 4;
const BORDER_LENGTH = 16;
const BORDER_LENGTH_CENTER = 32;
const PADDING_X = 120;
const ASPECT_RATIO = 1 / 5

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - ${BUTTON_WRAPPER_WIDTH}px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const row = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - ${BUTTON_WRAPPER_WIDTH + PADDING_X}px);
  height: calc((100vw - ${BUTTON_WRAPPER_WIDTH + PADDING_X}px) * ${ASPECT_RATIO / 2});
`

const Top = styled.div`
  ${row}
`

const Bottom = styled.div`
  ${row}
`

const kagi = css`
  width: ${BORDER_LENGTH}px;
  height: ${BORDER_LENGTH}px;
  border: 0px solid ${color.White};
`

const GuideTopLeft = styled.div`
  ${kagi}
  border-top-width: ${BORDER}px;
  border-left-width: ${BORDER}px;
`
const GuideTopCenter = styled.div`
  ${kagi}
  width: ${BORDER_LENGTH_CENTER}px;
  border-top-width: ${BORDER}px;
`
const GuideTopRight = styled.div`
  ${kagi}
  border-top-width: ${BORDER}px;
  border-right-width: ${BORDER}px;
`
const GuideBottomLeft = styled.div`
  ${kagi}
  border-bottom-width: ${BORDER}px;
  border-left-width: ${BORDER}px;
`
const GuideBottomCenter = styled.div`
  ${kagi}
  width: ${BORDER_LENGTH_CENTER}px;
  border-bottom-width: ${BORDER}px;
`
const GuideBottomRight = styled.div`
  ${kagi}
  border-bottom-width: ${BORDER}px;
  border-right-width: ${BORDER}px;
`

export const CameraGuide: FC = () => {
  return (
    <Wrapper>
      <Top>
        <GuideTopLeft/>
        <GuideTopCenter/>
        <GuideTopRight/>
      </Top>
      <Bottom>
        <GuideBottomLeft/>
        <GuideBottomCenter/>
        <GuideBottomRight/>
      </Bottom>
    </Wrapper>
  );
};
