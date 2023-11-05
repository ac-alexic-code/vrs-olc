import { routes } from "../../../routes/routes";
import DropdownButton from "../menu-dropdown/DropdownButton";
import DropdownContainer from "../menu-dropdown/DropdownContainer";

export const WoltDropdown = () => {
  return (
    <DropdownContainer>
      <DropdownButton
        onClick={() => {
          window.open(routes.finka, "_blank");
        }}
      >
        finka
      </DropdownButton>
      <DropdownButton
        onClick={() => {
          window.open(routes.muranow, "_blank");
        }}
      >
        muranów
      </DropdownButton>
      <DropdownButton
        onClick={() => {
          window.open(routes.mokotow, "_blank");
        }}
      >
        mokotów
      </DropdownButton>
    </DropdownContainer>
  );
};
