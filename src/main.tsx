import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

import { Theme as ThemeType } from "./styles/theme";
declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
