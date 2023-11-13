import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

// Interfaces
interface MenuItem {
  label: string;
  action: () => void;
}

interface DropdownProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  position?: "left" | "right";
}

// Animation
const fadeIn = css`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//Styled components
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const DropdownContainer = styled.div<{ position?: string }>`
  ${({ theme, position }) => `
    width: ${theme.width.menuDropdown};
    ${theme.mixins.forDesktop(`
        left: 2px;
        top: 48px;
    `)}
    & > :first-of-type {
      border-top: ${theme.border.default};
    }
    z-index: 2000;
    position: absolute;
    top: 70px;
    ${
      position === "right"
        ? "right: 205px;"
        : position === "left"
        ? "left: 200px;"
        : "right: 0px; bottom: 0px;"
    }
    height: min-content;
    animation: ${fadeIn} 0.5s;
  `}
`;

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
  align-items: center;
  font-size: 26px;
  height: 48px;
  width: 100%;
  padding-left: 16px;
  text-align: left;
`;

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  items,
  position,
}) => {
  const closeDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeDropdown} />}
      <DropdownContainer position={position}>
        {items.map((item, index) => (
          <DropdownButton
            key={index}
            onClick={() => {
              item.action();
              closeDropdown();
            }}
          >
            {item.label}
          </DropdownButton>
        ))}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
