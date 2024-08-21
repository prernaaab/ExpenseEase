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
    <div className="bg-[#F9FAFC] py-14 px-[3%] w-[21dvw] flex flex-col justify-between rounded-e-3xl">
      {/* text-[clamp(10px,1.3dvw,21px)] */}
      <div>
        <h3 className="mb-7 text-[clamp(10px,1.4dvw,21px)] font-semibold">
          Where your money go?
        </h3>
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
          <img src={img1} alt="img" className="h-[4dvw] -mt-8" />
          <img src={img2} alt="img" className="h-[5.5dvw] -mt-12" />
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-[clamp(9px,1.3dvw,24px)]">
            Save more money
          </h3>
          <p className="text-[clamp(10px,1dvw,20px)]">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <button className="bg-[#101010] text-white text-[clamp(9px,1dvw,12px)] rounded-md font-semibold tracking-wider py-3 w-full">
            VIEW TIPS
          </button>
        </div>
      </div>
    </div>
  );
}
