import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/contact" />
        <Route path="/menu" />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
