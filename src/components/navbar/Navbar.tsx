import styled from "@emotion/styled";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import logo from "../../assets/logo.png";

const NavbarUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 1.25em;
  width: 100%;
`;

const Languages = styled.div`
  display: flex;
  & > :not(:last-child) {
    margin-right: 0.65em;
  }
`;

const LanguageButton = styled(Button)`
  border: 0 !important;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => `
      background-color: ${theme.colors.white}
      `}
`;

const NavbarIcons = styled.div`
  display: none;
`;

const NavbarMenuCategories = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  ${({ theme }) => `
      border-top: ${theme.border.default};
      border-bottom: ${theme.border.default};`}

  ${theme.mixins.forDesktop(`
        border-left: ${theme.border.default};
    `)}
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarUpperContainer>
        <LanguageButtons />
        <LogoImage src={logo} alt="Logo" />
        <NavbarIcons>
          <a href="https://www.facebook.com/veganramenshop" target="_blank">
            <Icon name="facebook" />
          </a>
          <a href="https://www.instagram.com/veganramenshop" target="_blank">
            <Icon name="instagram" />
          </a>
        </NavbarIcons>
        <Icon name="menuBars" />
      </NavbarUpperContainer>

      <NavbarMenuCategories>
        <Button>przystawki</Button>
        <Button>ramen</Button>
        <Button>napoje</Button>
      </NavbarMenuCategories>
    </NavbarContainer>
  );
};

export default Navbar;
