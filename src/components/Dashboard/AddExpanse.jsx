import React, { useState } from "react";

export default function AddExpanse() {
  const [selectedValue, setSelectedValue] = useState("Select Catagory");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="dashboardParent">
      <div className="mb-10">
        <h3 className="text-4xl font-semibold mb-2 break-all text-wrap">
          ExpenseEase
        </h3>
        <div className="text-[#101010] opacity-50 text-sm">
          01 - 25 March, 2020
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282] md:w-[40dvw]">
          Add expense
        </div>
        <div className="flex flex-col px-3 mb-14">
          <select
            name="Select Catagory"
            onChange={handleSelectChange}
            defaultValue="Select Catagory"
            className="bg-white p-[10px] hover:cursor-pointer opacity-[51%] border-b-[1px]"
          >
            <option value="Select Catagory" hidden disabled>
              Select Catagory
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing">Housing</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Entertainment">Entertainment</option>
          </select>
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
        <button className="bg-[#101010] outline-none md:translate-x-[14dvw] max-md:w-full text-white font-semibold py-3 w-[40%] rounded-lg text-2xl">
          Add
        </button>
      </div>
    </div>
  );
}
