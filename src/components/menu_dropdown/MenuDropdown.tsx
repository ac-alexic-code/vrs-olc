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
    & > :first-child {
    border-top: ${theme.border.default};
  }
  `}
  z-index: 2000;
  position: absolute;
  top: 70px;
  right: 25px;
  height: min-content;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MenuDropdown: React.FC = () => {
  return (
    <DropdownContainer>
      <DropdownButton>menu</DropdownButton>
      <DropdownButton>kontakt</DropdownButton>
      <DropdownButton>facebook</DropdownButton>
      <DropdownButton>instagram</DropdownButton>
    </DropdownContainer>
  );
};

export default MenuDropdown;
