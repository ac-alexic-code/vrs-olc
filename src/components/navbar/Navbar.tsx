import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import { routes } from "../../routes/routes";
import WoltButtonDesktop from "../dropdown/wolt-dropdown/WoltButtonDesktop";

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
  const navigate = useNavigate();

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
          <Button onClick={() => navigate("/menu")}>menu</Button>
        </Wrapper>
        <Wrapper>
          <Button onClick={() => navigate("/contact")}>contact</Button>
        </Wrapper>
        <Wrapper>
          <WoltButtonDesktop />
        </Wrapper>
      </DesktopMenuCategories>

      <DesktopLanguagesContainer>
        <LanguageButtons />
      </DesktopLanguagesContainer>

      <NavbarIcons>
        <a href={routes.facebook} target="_blank">
          <Icon name="facebook" />
        </a>
        <a href={routes.instagram} target="_blank">
          <Icon name="instagram" />
        </a>
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
