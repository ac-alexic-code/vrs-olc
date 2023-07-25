import styled from "@emotion/styled";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import MenuBars from "../menu-bars/MenuBars";
import Logo from "../logo/Logo";

const NavbarUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25em;
  width: 100%;
  height: 90px;
  ${theme.mixins.forDesktop(`
    flex-direction: column;
    padding: 0;
    height: auto;
  `)}
`;

const NavbarContainer = styled.div`
  display: block;
  width: 100%;
  ${({ theme }) => `
    background-color: ${theme.colors.white};
  `}

  ${theme.mixins.forDesktop(`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border-right: ${theme.border.default};
  `)}
`;

const NavbarIcons = styled.div`
  display: none;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
      display: flex;
      justify-content: center;
      & > * {
        font-size: 28px;
        padding: 10px;
        cursor: pointer;
        color: black;
      }
      margin-top: 300px;
    `)}
`;

// const NavbarMenuCategories = styled.div`
//   display: flex;
//   width: 100%;
//   ${({ theme }) => `
//     border-top: ${theme.border.default};
//     border-bottom: ${theme.border.default};
//   `}

//   ${theme.mixins.forDesktop(`
//     flex-direction: column;
//     justify-content: flex-start;
//     height: auto;
//   `)}
// `;

const DesktopMenuCategories = styled.div`
  display: none;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  `)}
`;

const MobileMenuCategories = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  ${({ theme }) => `
    border-top: ${theme.border.default};
    border-bottom: ${theme.border.default};
  `}
  ${theme.mixins.forDesktop(`
    display: none;
  `)}
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarUpperContainer>
        <LanguageButtons />
        <Logo />
        <MenuBars />{" "}
      </NavbarUpperContainer>
      <DesktopMenuCategories>
        <Button>menu</Button>
        <Button>kontakt</Button>
      </DesktopMenuCategories>
      <MobileMenuCategories>
        <Button>przystawki</Button>
        <Button>ramen</Button>
        <Button>napoje</Button>
      </MobileMenuCategories>

      <NavbarIcons>
        <a href="https://www.facebook.com/veganramenshop" target="_blank">
          <Icon name="facebook" />
        </a>
        <a href="https://www.instagram.com/veganramenshop" target="_blank">
          <Icon name="instagram" />
        </a>
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
