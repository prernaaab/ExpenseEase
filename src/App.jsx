import { Layout, AddExpanse } from "./components";
import { Home, Login, Pagenotfound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<AddExpanse />} />
            <Route path="Expenses" element={<AddExpanse />} />
            <Route path="Summary" element={<AddExpanse />} />
            <Route path="Accounts" element={<AddExpanse />} />
            <Route path="Settings" element={<AddExpanse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
