import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import MenuDropdown from "../dropdown/MenuDropdown";

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

  const handleHamburgerClick = () => {
    setIsMenuDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Icon name="hamburger" />
      </HamburgerContainer>
      {isMenuDropdownVisible && (
        <MenuDropdown
          isOpen={isMenuDropdownVisible}
          onClose={() => setIsMenuDropdownVisible(false)}
        />
      )}
    </>
  );
};

export default Hamburger;
