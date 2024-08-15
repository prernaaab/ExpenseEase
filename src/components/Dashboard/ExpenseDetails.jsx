import React, { useState } from "react";
import img1 from "../../assets/Illustration-1.png";
import img2 from "../../assets/Illustration-2.png";

export default function ExpenseDetails() {
  const [stats, setStats] = useState([
    {
      title: "Food and Drinks",
      amount: 872,
    },
    {
      title: "Shopping",
      amount: 1378,
    },
    {
      title: "Housing",
      amount: 928,
    },
    {
      title: "Transportation",
      amount: 420,
    },
    {
      title: "Vehicle",
      amount: 520,
    },
  ]);
  return (
    <div className="bg-[#F9FAFC] py-14 px-10 w-[21dvw] flex flex-col justify-between rounded-e-3xl">
      <div>
        <h3 className="mb-7 text-xl font-semibold">Where your money go?</h3>
        <div>
          {stats.map((item) => {
            return (
              <div key={item.title} className="mb-4">
                <div className="flex text-sm justify-between -mb-3">
                  <div className="text-xs">{item.title}</div>
                  <div>{item.amount.toFixed(2)}</div>
                </div>
                <progress
                  id="file"
                  max="100"
                  value="32"
                  className="h-1 w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="rounded-lg bg-[#EDF0F6] w-full p-5 relative">
        <div className="flex justify-between mb-4">
          <img src={img1} alt="img" className="h-16 -mt-8" />
          <img src={img2} alt="img" className="h-20 -mt-12" />
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold">Save more money</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            modi.
          </p>
          <button className="bg-[#101010] text-white text-xs rounded-md font-semibold tracking-wider py-3 w-full">
            VIEW TIPS
          </button>
        </div>
      </div>
    </div>
  );
}
