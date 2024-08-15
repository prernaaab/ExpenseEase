import {
  Layout,
  AddExpanse,
  Settings,
  Accounts,
  Expense,
  Summary,
} from "./components";
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
          <Route path="/dashboard/*" element={<Layout />}>
            <Route index element={<AddExpanse />} />
            <Route path="Expenses" element={<Expense />} />
            <Route path="Summary" element={<Summary />} />
            <Route path="Accounts" element={<Accounts />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
