import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DropdownContainer = styled.div`
  ${({ theme }) => `
    width: ${theme.width.menuDropdown};
    ${theme.mixins.forDesktop(`
      display: none;
    `)}
  `}
  & > :first-of-type {
    border-top: ${({ theme }) => theme.border.default};
  }
  z-index: 2000;
  position: absolute;
  top: 70px;
  right: 25px;
  height: min-content;
  animation: ${fadeIn} 0.5s;
`;

export default DropdownContainer;
