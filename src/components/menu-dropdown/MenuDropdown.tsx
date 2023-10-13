import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Urls } from "../../enums/Urls";
import { useNavigate } from "react-router-dom";

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const DropdownButton = styled.button`
  width: 100%;
  ${({ theme }) => `
    ${theme.mixins.defaultButton()};
    ${theme.mixins.defaultHover()};
    border-bottom: ${theme.border.default};
    border-right: ${theme.border.default};
    border-left: ${theme.border.default};
    background-color: ${theme.colors.white};
    letter-spacing: ${theme.letterSpacing.default};
  `}
  font-size: 26px;
  height: 48px;
  width: 100%;
  padding-left: 16px;
  text-align: left;
`;

const DropdownContainer = styled.div`
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: none;
  `)}
  & > :first-of-type {
    border-top: ${({ theme }) => theme.border.default};
  }
  z-index: 2000;
  position: absolute;
  top: 70px;
  right: 25px;
  height: min-content;
  width: 200px;
  animation: ${fadeIn} 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

// Interfaces
interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

// MenuDropdown's body
const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Close Dropdown function
  const closeDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  // Redirect function
  const redirect = (
    destination: "menu" | "contact" | "facebook" | "instagram"
  ) => {
    let url;
    let route;
    switch (destination) {
      case "menu":
        route = "/menu";
        break;
      case "contact":
        route = "/contact";
        break;
      case "facebook":
        url = Urls.Facebook;
        break;
      case "instagram":
        url = Urls.Instagram;
        break;
      default:
        break;
    }

    if (!route) {
      window.open(url, "_blank");
    } else {
      navigate(route);
    }
    closeDropdown();
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeDropdown} />}
      <DropdownContainer>
        <DropdownButton onClick={() => redirect("menu")}>menu</DropdownButton>
        <DropdownButton onClick={() => redirect("contact")}>
          kontakt
        </DropdownButton>
        <DropdownButton onClick={() => redirect("facebook")}>
          facebook
        </DropdownButton>
        <DropdownButton onClick={() => redirect("instagram")}>
          instagram
        </DropdownButton>
      </DropdownContainer>
    </>
  );
};

export default MenuDropdown;
