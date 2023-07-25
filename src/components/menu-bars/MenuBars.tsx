import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";

const MenuBarsContainer = styled.div`
  display: block;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: none;
    `)}
`;

const MenuBars: React.FC = () => {
  return (
    <MenuBarsContainer>
      <Icon name="menuBars" />
    </MenuBarsContainer>
  );
};

export default MenuBars;
