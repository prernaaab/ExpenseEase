import React from "react";
import Graph from "./Graph";

export default function Expense() {
  return (
    <div className="dashboardParent w-[50dvw] max-lg:w-full">
      <div className="mb-10">
        <h3 className="text-4xl font-semibold mb-2 max-md:text-3xl">Expense</h3>
        <div className="text-[#101010] opacity-50 text-sm">
          01 - 25 March, 2020
        </div>
      </div>
      <div className="w-full">
        <Graph />
      </div>
    </div>
  );
}
