import { Icon } from "./components/icon/Icon";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
