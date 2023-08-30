import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.defaultButton()};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 48px;
  ${({ theme }) => `
    &:nth-of-type(2) {
      border-right: ${theme.border.default};
      border-left: ${theme.border.default};
    }
    

    ${theme.mixins.forDesktop(`
      max-width: 100%;
      font-weight: 600;
      letter-spacing: ${theme.letterSpacing.default};
      padding-left: 16px;
      justify-content: left;

      &:nth-of-type(2) {
        border-bottom: ${theme.border.default};
      }
    `)}
  `}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
