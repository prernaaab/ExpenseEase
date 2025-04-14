import {
  Layout1,
  Layout2,
  AddExpanse,
  Settings,
  SetBudget,
  Expense,
  Summary,
} from "./components";
import { Home, SignUp, Login, Pagenotfound } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/dashboard/*" element={<Layout1 />}>
          <Route index element={<AddExpanse />} />
          <Route path="Expenses" element={<Expense />} />
        </Route>
        <Route path="/dashboard/*" element={<Layout2 />}>
          <Route path="Summary" element={<Summary />} />
          <Route path="budget" element={<SetBudget />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
