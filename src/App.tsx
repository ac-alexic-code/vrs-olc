import { Icon } from "./components/icon/Icon";
import "./App.css";
import Button from "./components/button/Button";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <a href="https://www.facebook.com/veganramenshop" target="_blank">
          <Icon name="facebook" />
        </a>
        <a href="https://www.instagram.com/veganramenshop" target="_blank">
          <Icon name="instagram" />
        </a>
        <div className="navbar__menu-categories">
          <Button>przystawki</Button>
          <Button>ramen</Button>
          <Button>napoje</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
