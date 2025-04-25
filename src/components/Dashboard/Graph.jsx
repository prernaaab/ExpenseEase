import React from "react";
import useExpenseData from "../../hooks/useExpenseData";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const MyBarChart = () => {
  const Data = useExpenseData();

  return (
    <div className="h-24 mb-4">
      <ResponsiveContainer>
        <BarChart data={Data}>
          <Bar
            dataKey="amount_spent"
            fill="rgba(21, 122, 255,.2)"
            className="hover:cursor-pointer hover:fill-[#157aff]"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
