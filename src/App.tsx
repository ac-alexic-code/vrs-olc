import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
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
