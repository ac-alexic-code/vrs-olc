
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../icon/Icon";
import MenuDropdown from "../menu_dropdown/MenuDropdown";


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
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <HamburgerContainer onClick={handleHamburgerClick}>
        <Icon name="hamburger" />
      </HamburgerContainer>
      {isDropdownVisible && (
        <MenuDropdown
          isOpen={isDropdownVisible}
          onClose={() => setIsDropdownVisible(false)}
        />
      )}
    </>
  );
};

export default Hamburger;
