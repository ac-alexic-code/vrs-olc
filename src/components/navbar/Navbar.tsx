import styled from "@emotion/styled";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import logo from "../../assets/logo.png";
import MenuBars from "../menu-bars/MenuBars";

const NavbarUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25em;
  width: 100%;
  ${theme.mixins.forDesktop(`
      flex-direction: column;
      padding: 0;
  `)}
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  ${theme.mixins.forDesktop(`
    width: 100%;
  `)}
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => `
      background-color: ${theme.colors.white};
      width: 100%;
      height: auto;
    `}

  ${theme.mixins.forDesktop(`
      width: 20%;
      height: 100%; 
      border-right: ${theme.border.default};
  `)}
`;

const NavbarIcons = styled.div`
  display: none;
`;

const NavbarMenuCategories = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => `
      border-top: ${theme.border.default};
      border-bottom: ${theme.border.default};`}

  ${theme.mixins.forDesktop(`
        flex-direction: column;
        
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
        <MenuBars />{" "}
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
