import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { routes } from "../../routes/routes";
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

const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const closeDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeDropdown} />}
      <DropdownContainer>
        <DropdownButton
          onClick={() => {
            navigate("/menu");
            closeDropdown();
          }}
        >
          menu
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            navigate("/contact");
            closeDropdown();
          }}
        >
          kontakt
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.facebook, "_blank");
            closeDropdown();
          }}
        >
          facebook
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.instagram, "_blank");
            closeDropdown();
          }}
        >
          instagram
        </DropdownButton>
      </DropdownContainer>
    </>
  );
};

export default MenuDropdown;
