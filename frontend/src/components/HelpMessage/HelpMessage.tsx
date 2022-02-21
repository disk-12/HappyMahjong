import React from "react";
import { Container, Text } from "./HelpMessageStyle";
import { MdTouchApp } from "react-icons/md";
import { color } from "assets/color";
type Props = {
  page: "check" | "select" | "option";
};

export const HelpMessage: React.FC<Props> = ({ page }) => {
  switch (page) {
    case "check":
      return (
        <Container>
          <MdTouchApp size={32} color={color.White} />
          <Text>正しく認識されなかった牌をタップして変更してください</Text>
        </Container>
      );
    case "select":
      return (
        <Container>
          <MdTouchApp size={32} color={color.White} />
          <Text>タップして和了牌（アガリ牌）を教えてください。</Text>
        </Container>
      );

    case "option":
      return (
        <Container>
          <MdTouchApp size={32} color={color.White} />
          <Text>【オプション】和了の状態を選択してください。</Text>
        </Container>
      );
    default:
      return <></>;
  }
};
