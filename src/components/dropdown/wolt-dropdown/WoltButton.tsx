import { useState } from "react";
import Button from "../../button/Button";
import DropdownButton from "../menu-dropdown/DropdownButton";
import styled from "@emotion/styled";
import WoltDropdown from "./WoltDropdown";

const WoltButtonDesktop = styled(Button)`
  display: none;
  ${({ theme }) => `
    ${theme.mixins.forDesktop(`
      display: flex;
    `)}
  `}
`;

const WoltButtonMobile = styled(DropdownButton)`
  display: flex;
  ${({ theme }) => `
    ${theme.mixins.forDesktop(`
      display: none;
    `)}
  `}
`;

const WoltButton = () => {
  const [isWoltDropdownOpen, setIsWoltDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsWoltDropdownOpen(true);
  };

  const handleCloseDropdown = () => {
    setIsWoltDropdownOpen(false);
  };

  return (
    <>
      <WoltButtonMobile onMouseEnter={handleMouseEnter}>
        wolt
        {isWoltDropdownOpen && (
          <WoltDropdown
            isOpen={isWoltDropdownOpen}
            onClose={handleCloseDropdown}
          />
        )}
      </WoltButtonMobile>
      {isWoltDropdownOpen && (
        <WoltDropdown
          isOpen={isWoltDropdownOpen}
          onClose={handleCloseDropdown}
        />
      )}
      <WoltButtonDesktop onMouseEnter={handleMouseEnter}>
        wolt
      </WoltButtonDesktop>
    </>
  );
};

export default WoltButton;
