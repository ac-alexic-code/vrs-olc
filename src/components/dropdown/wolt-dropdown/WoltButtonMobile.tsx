import { useState } from "react";
import { WoltDropdown } from "./WoltDropdown";
import DropdownButton from "../menu-dropdown/DropdownButton";

const WoltButtonMobile = () => {
  const [isWoltDropdownOpen, setIsWoltDropdownOpen] = useState(false);

  const toggleWoltDropdown = () => {
    setIsWoltDropdownOpen(!isWoltDropdownOpen);
  };

  return (
    <DropdownButton onClick={toggleWoltDropdown}>
      wolt
      {isWoltDropdownOpen && <WoltDropdown />}
    </DropdownButton>
  );
};

export default WoltButtonMobile;
