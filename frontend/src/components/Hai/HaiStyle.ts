import styled, { css } from "styled-components";

type ImgProps = {
  isIcon?: boolean;
  size?: number;
};

const defaultStyles = css`
  width: 100%;
  max-width: 68px;
  height: auto;
`;

const isIconStyles = css`
  width: 24px;
  height: 24px;
  object-fit: contain;
  object-position: center;
`;

const iconSize = css<ImgProps>`
  width: ${({size}) => size}px;
  ${({isIcon, size}) => isIcon && `height: ${size}px`};
`

export const Img = styled.img<ImgProps>`
  display: block;
  ${({ isIcon }) => (isIcon ? isIconStyles : defaultStyles)}
  ${({ size }) => (size && iconSize)}
`;
