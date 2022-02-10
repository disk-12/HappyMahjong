import React from "react";
import { ButtonWrapper } from './ButtonStyle'


interface Props {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<Props> = ({
  onClick,
  text
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
    >
      { text }
    </ButtonWrapper>
  );
};

export default Button;
