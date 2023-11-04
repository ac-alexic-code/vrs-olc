import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${({ theme }) =>
    theme.mixins.forDesktop(`
    flex-direction: row;
    `)}
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Outlet />
    </Wrapper>
  );
}

export default App;
