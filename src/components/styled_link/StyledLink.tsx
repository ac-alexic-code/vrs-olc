import styled from "@emotion/styled";

const StyledLink = styled.a`
  ${({ theme }) => theme.mixins.defaultLink}
`;

export default StyledLink;
