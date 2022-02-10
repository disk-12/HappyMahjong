import styled, { css } from "styled-components";

type ImgProps = {
  isIcon?: boolean;
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

export const Img = styled.img<ImgProps>`
  display: block;
  ${({ isIcon }) => (isIcon ? isIconStyles : defaultStyles)}
`;
