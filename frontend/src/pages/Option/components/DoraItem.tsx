import { color } from "assets/color";
import { Hai } from "components/Hai";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

interface Props {
  type: "m" | "p" | "s" | "z";
  number: number;
  onClick: Function;
}

const typeObj = { m: "萬", p: "筒", s: "索" };
const jihai = ["東", "南", "西", "北", "白", "發", "中"];
const kansuji = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background: ${color.Border};
  border-radius: 16px;
  margin: 4px;
`;
const Text = styled.div`
  padding: 0 8px;
`;
const Container = styled.div`
  display: inline-block;
`;
export const DoraItem: React.FC<Props> = ({ type, number, onClick }) => {
  return (
    <Container onClick={() => onClick()}>
      <Item>
        <div>
          <Hai type={type} number={number} isIcon />
        </div>
        {type === "z" ? (
          <Text>{jihai[number - 1]}</Text>
        ) : (
          <Text>
            {kansuji[number - 1]}
            {typeObj[type]}
          </Text>
        )}
        <MdClose size={16} color={color.MainGreen} />
      </Item>
    </Container>
  );
};
