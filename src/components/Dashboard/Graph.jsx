import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  { name: "January", sales: 50 },
  { name: "February", sales: 40 },
  { name: "March", sales: 60 },
  { name: "April", sales: 70 },
  { name: "May", sales: 50 },
];

// rgba(21, 122, 255, 1) : on focus
const MyBarChart = () => (
  <div className="h-24">
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={data} width={50} height={48}>
        <Bar
          className="hover:cursor-pointer"
          dataKey="sales"
          fill="rgba(21, 122, 255, .2)"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default MyBarChart;
