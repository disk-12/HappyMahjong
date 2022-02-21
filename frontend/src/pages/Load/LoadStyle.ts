import { color } from "assets/color";
import styled from "styled-components";

export const LoadStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const LoaderAnimation = styled.div`

`

export const LoaderInner = styled.div`
  width: 57px;
`

type circleProps = {
  delay: number;
  duration: number;
}

export const LoaderInnerCircle = styled.div<circleProps>`
  background-color: ${color.White};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  float: left;
  animation-name: ball-grid-pulse;
  animation-iteration-count: infinite;
  animation-delay: 0;
  animation-delay: ${({ delay }) => (delay)}s;
  animation-duration: ${({ duration }) => (duration)}s;

  @keyframes ball-grid-pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const LoadingText = styled.div`
  font-weight: bold;
  color: ${color.Surface1};
`