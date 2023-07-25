import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import logo from "../../assets/logo.png";

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  ${theme.mixins.forDesktop(`
    width: 100%;
    height: auto;
  `)}
`;

const Logo: React.FC = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
