import React from "react";
import useExpenseData from "../../hooks/useExpenseData";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const MyBarChart = () => {
  const { expenses } = useExpenseData();

  return (
    <div className="h-24">
      <ResponsiveContainer width={"100%"} height={100}>
        <BarChart height={100} data={expenses}>
          <Bar
            dataKey={"AmountSpend"}
            label="AmountSpend"
            radius={4}
            fill="rgba(21, 122, 255,.5)"
            className="cursor-pointer"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
