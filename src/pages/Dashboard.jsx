import React, { useState } from "react";
import img1 from "../assets/Illustration-1.png";
import img2 from "../assets/Illustration-2.png";

export default function Dashboard() {
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
    <div className="bg-black max-h-[100dvh]">
      <div className="flex py-5 px-3">
        <div className="text-white mt-14 ml-16 mr-11">
          <div className="bg-white h-12 w-12 rounded-md mb-3"></div>
          <h3 className="text-2xl font-bold mb-1">Harshil</h3>
          <div className="text-[14px] mb-24 text-white opacity-50">
            chaurasiyaharshil7705@gmail.com
          </div>
          <div className="flex flex-col gap-6 mt-10 text-xl font-bold text-white opacity-50">
            <div>Add expanse</div>
            <div>Expenses</div>
            <div>Summary</div>
            <div>Accounts</div>
            <div>Settings</div>
          </div>
        </div>
        <div className="bg-white w-full flex justify-between rounded-3xl h-[94.65dvh]">
          <div className="p-14 pl-16">
            <div className="mb-10">
              <h3 className="text-4xl font-semibold mb-2">ExpenseEase</h3>
              <div className="text-[#101010] opacity-50 text-sm">
                01 - 25 March, 2020
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282] w-[40dvw]">
                Add expense
              </div>
              <div className="flex flex-col px-3 mb-14">
                <input
                  type="text"
                  className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
                  placeholder="Amount spend"
                />
                <input
                  type="text"
                  className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
                  placeholder="Time"
                />
                <input
                  type="text"
                  className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
                  placeholder="Remarks"
                />
              </div>
              <button className="bg-[#101010] outline-none translate-x-[14dvw] text-white font-semibold py-3 px-20 rounded-lg text-2xl">
                Add
              </button>
            </div>
          </div>
          <div className="bg-[#F9FAFC] py-14 px-10 w-[20rem] flex flex-col justify-between rounded-e-3xl">
            <div>
              <h3 className="mb-7 text-xl font-semibold">
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
                        className="h-1 w-full"
                        value="32"
                        max="100"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, modi.
                </p>
                <button className="bg-[#101010] text-white text-xs rounded-md font-semibold tracking-wider py-3 w-full">
                  VIEW TIPS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
