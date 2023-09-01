import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.defaultLink}
`;

export default StyledLink;
