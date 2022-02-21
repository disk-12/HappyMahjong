import React from "react";
import { MdOutlineReportGmailerrorred, MdRefresh } from "react-icons/md";
import { Button } from "components/Button";
import { ButtonText } from "components/Button/ButtonStyle";
import { ErrorPageStyle, ErrorWrapper, ErrorTextWrapper, ErrorButton } from './ErrorPageStyle'
import { color } from "assets/color";

interface Props {
  text: string;
  to?: string;
  toText?: string;
}

export const ErrorPage: React.FC<Props> = props => {
  return (
    <ErrorPageStyle>
      <ErrorWrapper>
        <ErrorTextWrapper>
          <MdOutlineReportGmailerrorred color={color.MainGreen} size={24}/>
          <div>{props.text}</div>
        </ErrorTextWrapper>
        {props.to &&
          <ErrorButton>
            <Button to={props.to} color={color.Border}>
              <MdRefresh size={24}/>
              <ButtonText>{props.toText}</ButtonText>
            </Button>
          </ErrorButton>
        }
      </ErrorWrapper>
    </ErrorPageStyle>
  );
};

export default ErrorPage;
