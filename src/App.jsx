import Home from "./pages/Home";
import Login from "./pages/login";
import Pagenotfound from "./pages/pagenotfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
