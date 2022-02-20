import { color } from "assets/color";
import styled from "styled-components";

export const ErrorPageStyle = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorWrapper = styled.div`
  max-width: calc(100% - 32px);
  max-height: calc(100vh - 32px);
  background: ${color.Surface1};
  color: ${color.MainGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 32px 48px;
  box-sizing: border-box;
  border-radius: 24px;
`

export const ErrorTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const ErrorButton = styled.div`
  display: flex;
  justify-content: center;
`