import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper, LinkWrapper } from './ButtonStyle'

interface Props {
  to?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = props => {
  const isLink = !!props.to
  return (
    <>
      { isLink ? (
          <Link to={props.to ? props.to : ''}>
            <LinkWrapper {...props}/>
          </Link>
        ) : (
          <ButtonWrapper {...props}/>
        )
      }
    </>
  );
};

export default Button;
