import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import Dropdown from "../dropdown/Dropdown";
import { routesMenu, routesWolt } from "../../routes/routes";
import { useNavigate } from "react-router-dom";

const HamburgerContainer = styled.div`
  display: block;
  font-size: 24px;
  cursor: pointer;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    display: none;
    `)}
`;

const Hamburger: React.FC = () => {
  const [isMenuDropdownVisible, setIsMenuDropdownVisible] = useState(false);
  const [isWoltDropdownVisible, setIsWoltDropdownVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuDropdownVisible((prevState) => !prevState);
    console.log("menu", isMenuDropdownVisible);
  };

  const handleWoltButtonClick = () => {
    setIsWoltDropdownVisible((prevState) => !prevState);
    console.log("wolt", isWoltDropdownVisible);
    console.log("menu", isMenuDropdownVisible);
  };

  const navigate = useNavigate();

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

  const woltItems = [
    { label: "finka", action: () => window.open(routesWolt.finka, "_blank") },
    {
      label: "muranów",
      action: () => window.open(routesWolt.muranow, "_blank"),
    },
    {
      label: "mokotów",
      action: () => window.open(routesWolt.mokotow, "_blank"),
    },
  ];

  return (
    <>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Icon name="hamburger" />
      </HamburgerContainer>
      {isMenuDropdownVisible && (
        <Dropdown
          isOpen={isMenuDropdownVisible}
          onClose={() => setIsMenuDropdownVisible(false)}
          items={menuItems}
        />
      )}
      {isWoltDropdownVisible && (
        <Dropdown
          isOpen={isWoltDropdownVisible}
          onClose={() => setIsWoltDropdownVisible(false)}
          items={woltItems}
          position={"left"}
        />
      )}
    </>
  );
};

export default Hamburger;
