import styled from "@emotion/styled";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
import StyledLink from "../link/Link";
import { Urls } from "../../enums/Urls";

const NavbarUpperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 90px;
  ${({ theme }) => `
    border-bottom: ${theme.border.default};
  `}
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
      align-items: flex-end;
      height: auto;
      a {
        font-size: 28px;
        padding: 10px;
        cursor: pointer;
        color: black;
      }
    `)}
`;

const DesktopMenuCategories = styled.div`
  display: none;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  `)}
`;

const DesktopLanguagesContainer = styled.div`
  display: none;
  ${({ theme }) => `
  ${theme.mixins.forDesktop(`
    display: flex;
  `)}
  `}
`;

const MobileLanguagesContainer = styled.div`
  display: flex;
  ${({ theme }) => `
  ${theme.mixins.forDesktop(`
    display: none;
  `)}
  `}
`;

const Wrapper = styled.div`
  ${({ theme }) => `
        border-bottom: ${theme.border.default};
        ${theme.mixins.defaultHover()}
    `}
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarUpperContainer>
        <MobileLanguagesContainer>
          <LanguageButtons />
        </MobileLanguagesContainer>
        <Logo />
        <Hamburger />
      </NavbarUpperContainer>
      <DesktopMenuCategories>
        <Wrapper>
          <Button>
            <StyledLink to="/menu">menu</StyledLink>
          </Button>
        </Wrapper>
        <Wrapper>
          <Button>
            <StyledLink to="/contact">kontakt</StyledLink>
          </Button>
        </Wrapper>
      </DesktopMenuCategories>

      <DesktopLanguagesContainer>
        <LanguageButtons />
      </DesktopLanguagesContainer>

      <NavbarIcons>
        <a href={Urls.Facebook} target="_blank">
          <Icon name="facebook" />
        </a>
        <a href={Urls.Instagram} target="_blank">
          <Icon name="instagram" />
        </a>
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
