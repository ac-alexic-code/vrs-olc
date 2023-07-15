import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { forDesktop } from "../../styles/mixins";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  all: unset;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 48px;
  width: 100%;
  &:nth-of-type(2) {
    border-right: ${theme.defaultBorder};
    border-left: ${theme.defaultBorder};
  }

  ${forDesktop(`
    font-weight: 600;
    letter-spacing: 2px;
    padding: 0 16px;
    justify-content: left;

    &:nth-of-type(2) {
      border-bottom: ${theme.defaultBorder};
      border-top: ${theme.defaultBorder};
    }
  `)}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
