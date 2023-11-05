import React from "react";
import styled from "@emotion/styled";
import { routes } from "../../../routes/routes";
import Overlay from "../menu-dropdown/Overlay";
import DropdownButton from "../menu-dropdown/DropdownButton";
import DropdownContainer from "../menu-dropdown/DropdownContainer";

const WoltDropdownContainer = styled(DropdownContainer)`
  ${({ theme }) => `
    width: ${theme.width.woltDropdown};
    top: 35vh;
    left: 19wh;
    width: 180px;
    
    ${theme.mixins.forDesktop(`
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      margin: 0;
      font-weight: normal;
      z-index: 2000;
    `)}
  `}
`;

interface WoltDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const WoltDropdown: React.FC<WoltDropdownProps> = ({ isOpen, onClose }) => {
  const closeDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeDropdown} />}
      <WoltDropdownContainer>
        <DropdownButton
          onClick={() => {
            window.open(routes.finka, "_blank");
            closeDropdown();
          }}
        >
          finka
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.muranow, "_blank");
            closeDropdown();
          }}
        >
          muranów
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.mokotow, "_blank");
            closeDropdown();
          }}
        >
          mokotów
        </DropdownButton>
      </WoltDropdownContainer>
    </>
  );
};

export default WoltDropdown;
