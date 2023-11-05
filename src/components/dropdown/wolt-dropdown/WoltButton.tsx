import { useState } from "react";
import Button from "../../button/Button";
import DropdownButton from "../menu-dropdown/DropdownButton";
import { WoltDropdown } from "./WoltDropdown";

// const WoltButtonDesktop = styled.div`
//   display: none;
//   ${({ theme }) => `
//     ${theme.mixins.forDesktop(`
//       display: flex;
//     `)}
//   `}
// `;

// const WoltButtonMobile = styled.div`
//   display: flex;
//   ${({ theme }) => `
//     ${theme.mixins.forDesktop(`
//       display: none;
//     `)}
//   `}
// `;

const WoltButton = () => {
  const [isWoltDropdownOpen, setIsWoltDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsWoltDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsWoltDropdownOpen(false);
  };

  const isMobile = window.innerWidth < 601;

  if (isMobile) {
    return (
      <DropdownButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        wolt
        {isWoltDropdownOpen && <WoltDropdown />}
      </DropdownButton>
    );
  } else {
    return (
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        wolt
        {isWoltDropdownOpen && <WoltDropdown />}
      </Button>
    );
  }
};

export default WoltButton;
