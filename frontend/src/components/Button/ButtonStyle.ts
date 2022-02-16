import { color as colorAsset } from "assets/color";
import styled, { css } from "styled-components";

type wrapperProps = {
  color?: string
}

const wrapperStyle = css<wrapperProps>`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  color: ${colorAsset.MainGreen};
  background-color: ${({ color }) => color || colorAsset.Surface1};
  text-decoration: none;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:active {
    background-color: ${colorAsset.Selected};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colorAsset.DisabledMain};
    background-color: ${colorAsset.DisabledBack};

    &:active {
      background-color: ${colorAsset.DisabledBack};
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