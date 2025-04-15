import React from "react";
// import useExpenseData from "../../hooks/useExpenseData";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const MyBarChart = () => {
  // const { expenses } = useExpenseData();
  const data = [
    { name: "January", sales: 50 },
    { name: "February", sales: 40 },
    { name: "March", sales: 60 },
    { name: "April", sales: 70 },
    { name: "May", sales: 50 },
  ];

  return (
    <div className="h-24">
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar
            dataKey="sales"
            fill="rgba(21, 122, 255,.2)"
            className="hover:cursor-pointer hover:fill-[#157aff]"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
