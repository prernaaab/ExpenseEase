import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "./DashBoardWrapper";

// Import assets
import ExpenseDetails from './ExpenseDetails';


export default function SetBudget() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');





  return (
    <>
      <DashboardWrapper>

        <div className="flex flex-col w-full">
          <div className="mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
              ExpenseEase
            </h3>
            <div className="text-[#101010] opacity-50 text-xs md:text-sm">
              01 - 25 March, 2020
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full mt-11">
            <div className="w-full">
              <div className="text-xl md:text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282]">
                Set Budget
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative">
                  <select
                    className="w-full p-3 md:p-4 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer text-sm md:text-base"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select category</option>
                    <option value="Food and Drinks">Food and Drinks</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Vehicle">Vehicle</option>
                  </select>
                </div>

                <input
                  type="number"
                  placeholder="Budget amount"
                  className="w-full p-3 md:p-4 border border-gray-200 rounded-lg text-sm md:text-base"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <div className="flex flex-col gap-2 items-center mt-6">
                  <button
                    className="w-[50%] bg-[#101010] text-white font-semibold py-3 md:py-4 rounded-lg text-xl  mt-2"
                  >
                    Set
                  </button>
                </div>
              </div>
            </div>


          </div>

        </div>

      </DashboardWrapper>
      <ExpenseDetails />
    </>
  );
}