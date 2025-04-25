import { Outlet } from "react-router-dom";
// import useCheckAuth from "../hooks/useCheckAuth";
// import  from "./ExpenseDetails";
import { ExpenseDetails, DashboardLinks } from "./index";

export default function layout() {
  // useCheckAuth();

  return (
    <div className="bg-black min-h-[100dvh] relative">
      <div className="flex flex-col lg:flex-row lg:py-[2.67dvh] lg:px-3">
        <DashboardLinks />
        <div className="bg-white w-full max-md:pb-24 flex flex-col lg:flex-row overflow-hidden justify-between lg:rounded-3xl max-lg:min-h-[100dvh] lg:h-[94.65dvh]">
          <Outlet />
          <ExpenseDetails />
        </div>
      </div>
    </div>
  );
}
