import { useState } from "react";
import styled from "@emotion/styled";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { routesMenu } from "../../routes/routes";
import WoltDropdown from "./WoltDropdown";

const MenuDropdownContainer = styled.div`
  position: absolute;
  top: 78px;
  right: 230px;
`;

const MenuDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [isWoltDropdownVisible, setIsWoltDropdownVisible] = useState(false);

  const navigate = useNavigate();
  console.log("isWoltDropdownVisible:", isWoltDropdownVisible);

  const handleWoltButtonClick = () => {
    setIsWoltDropdownVisible(true);
    console.log("handleWoltButton clicked");
    console.log("isWoltDropdownVisible:", isWoltDropdownVisible);
  };

  const menuItems = [
    { label: "menu", action: () => navigate("/menu") },
    { label: "kontakt", action: () => navigate("/contact") },
    {
      label: "facebook",
      action: () => window.open(routesMenu.facebook, "_blank"),
    },
    {
      label: "instagram",
      action: () => window.open(routesMenu.instagram, "_blank"),
    },
    {
      label: "wolt",
      action: handleWoltButtonClick,
    },
  ];

  return (
    <MenuDropdownContainer className="menu dropdown container">
      <Dropdown isOpen={isOpen} onClose={onClose} items={menuItems} />
      {isWoltDropdownVisible && (
        <WoltDropdown
          isOpen={isWoltDropdownVisible}
          onClose={() => setIsWoltDropdownVisible(false)}
        />
      )}
    </MenuDropdownContainer>
  );
};

export default MenuDropdown;
