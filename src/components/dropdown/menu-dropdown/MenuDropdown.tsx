import { routes } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import DropdownContainer from "./DropdownContainer";
import DropdownButton from "./DropdownButton";
import WoltButton from "../wolt-dropdown/WoltButton";
import Overlay from "./Overlay";

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
