import styled from "@emotion/styled";

const DropdownButton = styled.button`
  ${({ theme }) => `
    ${theme.mixins.defaultButton()};
    ${theme.mixins.defaultHover()};
    border-bottom: ${theme.border.default};
    border-right: ${theme.border.default};
    border-left: ${theme.border.default};
    background-color: ${theme.colors.white};
    letter-spacing: ${theme.letterSpacing.default};
  `}
  font-size: 26px;
  height: 48px;
  width: 100%;
  padding-left: 16px;
  text-align: left;
`;

const DropdownContainer = styled.div`
  ${({ theme }) => `
    ${theme.mixins.forDesktop(`
      display: none;
    `)}
    & > :first-of-type {
    border-top: ${theme.border.default};
  }
  `}
  z-index: 2000;
  position: absolute;
  top: 70px;
  right: 25px;
  height: min-content;
  width: 200px;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose }) => {
  const handleDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <Overlay onClick={handleDropdown} />}
      <DropdownContainer>
        <DropdownButton>menu</DropdownButton>
        <DropdownButton>kontakt</DropdownButton>
        <DropdownButton>facebook</DropdownButton>
        <DropdownButton>instagram</DropdownButton>
      </DropdownContainer>
    </>
  );
};

export default MenuDropdown;
