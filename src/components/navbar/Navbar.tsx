import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LanguageButtons from "../language-buttons/LanguageButtons";
import Logo from "../logo/Logo";
import Hamburger from "../hamburger/Hamburger";
import Dropdown from "../dropdown/Dropdown";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/theme";
import { routesMenu, routesWolt } from "../../routes/routes";
import { useState } from "react";

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
  position: relative;
  ${({ theme }) => `
        border-bottom: ${theme.border.default};
        ${theme.mixins.defaultHover()}
    `}
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [isWoltDropdownVisible, setIsWoltDropdownVisible] = useState(false);
  console.log(isWoltDropdownVisible);

  const handleWoltButtonClick = () => {
    setIsWoltDropdownVisible(true);
    console.log(isWoltDropdownVisible);
  };

  const woltItems = [
    { label: "finka", action: () => window.open(routesWolt.finka, "_blank") },
    {
      label: "muranów",
      action: () => window.open(routesWolt.muranow, "_blank"),
    },
    {
      label: "mokotów",
      action: () => window.open(routesWolt.mokotow, "_blank"),
    },
  ];

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
          <Button onClick={() => navigate(routesMenu.menu)}>menu</Button>
        </Wrapper>
        <Wrapper>
          <Button onClick={() => navigate(routesMenu.contact)}>contact</Button>
        </Wrapper>
        <Wrapper>
          <Button onClick={handleWoltButtonClick}>wolt</Button>
          {isWoltDropdownVisible && (
            <Dropdown
              className="wolt"
              isOpen={isWoltDropdownVisible}
              onClose={() => setIsWoltDropdownVisible(false)}
              items={woltItems}
            />
          )}
        </Wrapper>
      </DesktopMenuCategories>

      <DesktopLanguagesContainer>
        <LanguageButtons />
      </DesktopLanguagesContainer>

      <NavbarIcons>
        <a href={routesMenu.facebook} target="_blank">
          <Icon name="facebook" />
        </a>
        <a href={routesMenu.instagram} target="_blank">
          <Icon name="instagram" />
        </a>
      </NavbarIcons>
    </NavbarContainer>
  );
};

export default Navbar;
