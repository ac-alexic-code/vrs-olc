import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Theme as ThemeType } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
