import React from "react";
import { ButtonWrapper } from './ButtonStyle'


interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
    >
    </ButtonWrapper>
  );
};

export default Button;
