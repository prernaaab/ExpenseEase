import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLinks, ExpenseDetails } from "./index";

export default function layout() {
  return (
    <>
      <div className="bg-black max-h-[100dvh]">
        <div className="flex py-[2.67dvh] px-3">
          <DashboardLinks />
          <div className="bg-white w-full flex justify-between rounded-3xl h-[94.65dvh]">
            <Outlet />
            <ExpenseDetails />
          </div>
        </div>
      </div>
    </>
  );
}
