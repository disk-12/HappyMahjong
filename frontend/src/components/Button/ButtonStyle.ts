import { color } from "assets/color";
import styled, { css } from "styled-components";

const wrapperStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: ${color.Surface1};
  border-radius: 16px;
  cursor: pointer;
`

export const ButtonWrapper = styled.button`
  ${wrapperStyle}
`

export const LinkWrapper = styled.a`
  ${wrapperStyle}
`