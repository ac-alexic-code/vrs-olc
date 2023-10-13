import styled from "@emotion/styled";
import Button from "../components/button/Button";
import { theme } from "../styles/theme";

const MobileMenuCategories = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: fixed;
  top: 90px;
  ${({ theme }) => `
    border-bottom: ${theme.border.default};
  `}
  ${theme.mixins.forDesktop(`
    display: none;
  `)}
`;

export const Menu = () => {
  return (
    <MobileMenuCategories>
      <Button>przystawki</Button>
      <Button>ramen</Button>
      <Button>napoje</Button>
    </MobileMenuCategories>
  );
};
