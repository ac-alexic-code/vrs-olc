import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

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
  ${({ theme }) => `
    &:nth-of-type(2) {
      border-right: ${theme.border.default};
      border-left: ${theme.border.default};
    }

    ${theme.mixins.forDesktop(`
      font-weight: 600;
      letter-spacing: 2px;
      padding: 0 16px;
      justify-content: left;

      &:nth-of-type(2) {
        border-bottom: ${theme.border.default};
        border-top: ${theme.border.default};
        border-right: 0;
        border-left: 0;
      }
    `)}
  `}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
