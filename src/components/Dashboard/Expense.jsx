import React from "react";
import Graph from "./Graph";
export default function Expense() {
  return (
    <div className="dashboardParent max-w-[55dvw]">
      <div className="mb-10">
        <h3 className="text-4xl font-semibold mb-2">Expense</h3>
      </div>
      <div className="w-full">
        <Graph />
      </div>
    </div>
  );
}
