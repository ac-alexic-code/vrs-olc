import styled from "@emotion/styled";
import { routes } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import DropdownContainer from "./DropdownContainer";
import DropdownButton from "./DropdownButton";
import WoltButton from "../wolt-dropdown/WoltButton";

// Styled components
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

// Interfaces
interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const closeDropdown = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeDropdown} />}
      <DropdownContainer>
        <DropdownButton
          onClick={() => {
            navigate("/menu");
            closeDropdown();
          }}
        >
          menu
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            navigate("/contact");
            closeDropdown();
          }}
        >
          kontakt
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.facebook, "_blank");
            closeDropdown();
          }}
        >
          facebook
        </DropdownButton>
        <DropdownButton
          onClick={() => {
            window.open(routes.instagram, "_blank");
            closeDropdown();
          }}
        >
          instagram
        </DropdownButton>
        <WoltButton />
      </DropdownContainer>
    </>
  );
};

export default MenuDropdown;
