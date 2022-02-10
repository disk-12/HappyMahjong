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

  &:disabled {
    cursor: not-allowed;
    color: ${color.DisabledMain};
    background-color: ${color.DisabledBack};

    &:active {
      background-color: ${color.DisabledBack};
    }
  }
`

export const ButtonWrapper = styled.button`
  ${wrapperStyle}
`

export const LinkWrapper = styled.div`
  ${wrapperStyle}
`

export const ButtonText = styled.span`
  padding: 0 4px;
`