import { useState } from "react";
import Button from "../../button/Button";
import DropdownButton from "../menu-dropdown/DropdownButton";
import { WoltDropdown } from "./WoltDropdown";
import styled from "@emotion/styled";

const WoltButtonDesktop = styled.div`
  display: none;
  ${({ theme }) => `
    ${theme.mixins.forDesktop(`
      display: flex;
    `)}
  `}
`;

const WoltButtonMobile = styled(DropdownButton)`
  display: flex;
  width: 100%;
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

  const handleMouseLeave = () => {
    setIsWoltDropdownOpen(false);
  };

  return (
    <WoltButtonMobile
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      wolt
      {isWoltDropdownOpen && <WoltDropdown />}
    </WoltButtonMobile>
  );
};

export default WoltButton;
