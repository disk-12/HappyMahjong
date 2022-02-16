import styled from "styled-components";
import {
  HaiContainer as HaiContainerStyle, 
  HaiBox as HaiBoxStyle,
} from "pages/Select/SelectStyle";
import { color } from "assets/color";

const YAKU_BORDER = 3

export const HaiContainer = styled(HaiContainerStyle)``

export const HaiBox = styled(HaiBoxStyle)``

export const YakuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 32px;
  margin-top: 24px;
`

export const YakuBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: ${8 - YAKU_BORDER}px ${16 - YAKU_BORDER}px;
  color: ${color.White};
  font-size: 20px;
  font-weight: bold;
  border: ${YAKU_BORDER}px solid ${color.Surface1};
  border-radius: 8px;
  background: linear-gradient(109.8deg, #323232 11.98%, #4E4947 26.56%, #7B7873 41.15%, #4E4947 55.73%, #323232 70.31%);
  box-shadow: 0px 4px 16px -4px rgba(45, 49, 51, 0.6);
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 32px;
`

export const ResultBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 16px;
  padding: ${32 - YAKU_BORDER}px ${40 - YAKU_BORDER}px;
  background: 
    linear-gradient(${color.White}, ${color.White}) padding-box,
    linear-gradient(109.8deg, #323232 11.98%, #4E4947 26.56%, #7B7873 41.15%, #4E4947 55.73%, #323232 70.31%) border-box;
  border: ${YAKU_BORDER}px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 4px 16px -4px rgba(45, 49, 51, 0.6);
`

export const FuAndHan = styled.span`
  color: ${color.Black};
  font-size: 24px;
  font-weight: bold;
  margin-left: -24px;
`

export const Ten = styled.div`
  color: ${color.Black};
  font-size: 32px;
  font-weight: bold;
  background: -webkit-linear-gradient(-109.8deg, #323232 11.98%, #4E4947 26.56%, #7B7873 41.15%, #4E4947 55.73%, #323232 70.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    font-size: 24px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`
