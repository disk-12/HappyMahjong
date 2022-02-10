import { color } from "assets/color";
import styled, { css } from "styled-components";

const wrapperStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  color: ${color.MainGreen};
  background-color: ${color.Surface1};
  text-decoration: none;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:active {
    background-color: ${color.Selected};
  }
`

export const ButtonWrapper = styled.button`
  ${wrapperStyle}
`

export const LinkWrapper = styled.div`
  ${wrapperStyle}
`