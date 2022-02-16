import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { color } from "assets/color";
type Props = { text: string; checked: boolean; onClick: Function };

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 12px 0;
`;
const Text = styled.div`
  margin-left: 8px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
`;
export const CheckBox: React.FC<Props> = ({ text, checked, onClick }) => {
  return (
    <Container onClick={() => onClick()}>
      {checked ? (
        <MdCheckBox size={32} color={color.MainGreen} />
      ) : (
        <MdCheckBoxOutlineBlank size={32} color={color.MainGreen} />
      )}
      <Text>{text}</Text>
    </Container>
  );
};
