import { useState } from "react";
import Button from "../../button/Button";
import { WoltDropdown } from "./WoltDropdown";

const WoltButtonDesktop = () => {
  const [isWoltDropdownOpen, setIsWoltDropdownOpen] = useState(false);

  const toggleWoltDropdown = () => {
    setIsWoltDropdownOpen(!isWoltDropdownOpen);
  };

  return (
    <Button onClick={toggleWoltDropdown}>
      wolt
      {isWoltDropdownOpen && <WoltDropdown />}
    </Button>
  );
};

export default WoltButtonDesktop;
