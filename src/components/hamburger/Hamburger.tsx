import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";

const HamburgerContainer = styled.div`
  display: block;
  font-size: 24px;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: none;
    `)}
`;

const Hamburger: React.FC = () => {
  return (
    <HamburgerContainer>
      <Icon name="hamburger" />
    </HamburgerContainer>
  );
};

export default Hamburger;
