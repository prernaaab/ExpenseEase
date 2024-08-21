import React, { useState } from "react";

export default function Features() {
  const [features, setFeatures] = useState([
    {
      heading: "Expense Categorisation",
      para: "Effortlessly categorize your expenses for better organization.",
    },
    {
      heading: "Budget Tracking",
      para: "Stay on top of your finances by tracking your budget in real-time.",
    },
    {
      heading: "Reporting",
      para: "Generate detailed reports to gain insights into your spending habits.",
    },
  ]);
  return (
    <div className="flex gap-2 flex-wrap">
      {features.map((items) => {
        return (
          <div
            className="bg-[#F8F8F8] px-5 py-3 flex-grow rounded-md"
            key={items.heading}
          >
            <h3 className="text-2xl font-extrabold mb-1">{items.heading}</h3>
            <div className="text-[15px] opacity-50 max-w-80">{items.para}</div>
          </div>
        );
      })}
    </div>
  );
}
