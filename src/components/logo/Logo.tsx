import styled from "@emotion/styled";
import logo from "../../assets/logo.png";

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
      width: 100%;
    `)}
`;

const Logo: React.FC = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
