import React from "react";
import "./Top.scss";
import { color } from "assets/color";
import styled from "styled-components";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { MdNavigateNext } from "react-icons/md";

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
    display: flex;
    align-items: center;
  `;
  const ButtonBox = styled.div`
    margin: 0 8px;
  `;
  return (
    <>
      <Title>麻雀計算</Title>
      <LinkBox>
        <ButtonBox>
          <Button to="/camera">
            <ButtonText>開始する</ButtonText>
            <MdNavigateNext size={24} />
          </Button>
        </ButtonBox>
        <ButtonBox>
          <Button to="/demo">
            <ButtonText>デモ</ButtonText>
            <MdNavigateNext size={24} />
          </Button>
        </ButtonBox>
      </LinkBox>
    </>
  );
};
