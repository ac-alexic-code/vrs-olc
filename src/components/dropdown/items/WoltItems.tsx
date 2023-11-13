import { routesWolt } from "routes/routes";

export const woltItems = [
  { label: "finka", action: () => window.open(routesWolt.finka, "_blank") },
  { label: "muranów", action: () => window.open(routesWolt.muranow, "_blank") },
  { label: "mokotów", action: () => window.open(routesWolt.mokotow, "_blank") },
];

export type WoltItems = keyof typeof woltItems;
