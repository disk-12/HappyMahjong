import React from "react";
import "./Top.scss";
import { Link } from "react-router-dom";
import { color } from "assets/color";
import styled from "styled-components";
interface Props {}

export const Top: React.FC<Props> = () => {
  const Title = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;
    font-size: 62px;
    line-height: 90px;

    text-align: center;

    color: ${color.White};
  `;
  const LinkBox = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 78px;
  `;
  return (
    <>
      <Title>麻雀計算</Title>
      <LinkBox>
        <Link to="/camera">開始する</Link>
      </LinkBox>
    </>
  );
};
