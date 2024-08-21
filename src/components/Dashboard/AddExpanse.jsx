import React from "react";

export default function AddExpanse() {
  return (
    <div className="py-14 px-[4.5dvw]">
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
        <button className="bg-[#101010] outline-none translate-x-[14dvw] text-white font-semibold py-3 w-[40%] rounded-lg text-2xl">
          Add
        </button>
      </div>
    </div>
  );
}
