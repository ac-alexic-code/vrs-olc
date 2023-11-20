import Dropdown from "./Dropdown";
import { routesWolt } from "../../routes/routes";

const WoltDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  console.log("Wolt dropdown isOpen:", isOpen);

  const woltItems = [
    { label: "finka", action: () => window.open(routesWolt.finka, "_blank") },
    {
      label: "muranów",
      action: () => window.open(routesWolt.muranow, "_blank"),
    },
    {
      label: "mokotów",
      action: () => window.open(routesWolt.mokotow, "_blank"),
    },
  ];

  return <Dropdown isOpen={isOpen} onClose={onClose} items={woltItems} />;
};

export default WoltDropdown;
