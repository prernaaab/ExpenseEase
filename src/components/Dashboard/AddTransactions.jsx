import React, { useState } from "react";
import useAddExpense from "../../hooks/useAddExpense";
import DashboardWrapper from "./DashBoardWrapper";
import ExpenseDetails from "./ExpenseDetails";

// import { useDispatch } from "react-redux";
// import { addExpense, client } from "../../redux/expenseSlice";

export default function AddExpense() {
  // const dispatch = useDispatch();
  const {
    Time,
    setTime,
    userId,
    setUserId,
    Remarks,
    setRemarks,
    AmountSpend,
    setAmountSpend,
    SelectCatagory,
    SetSelectCatagory,
    PaymentMethod,
    setPaymentMethod,
    disable,
    handleAddExpense,
    handleClear,
  } = useAddExpense();
  const [transactionType, setTransactionType] = useState("Income");

  // useEffect(() => {
  //   // Get user details from Appwrite Account
  //   const getUserId = async () => {
  //     try {
  //       const user = await account.get();
  //       setUserId(user.$id); // Set userId
  //     } catch (error) {
  //       console.error("Failed to get user details:", error);
  //     }
  //   };

  //   getUserId();
  // }, []);

  return (
    <>
    <DashboardWrapper>
        <div className="mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
            ExpenseEase
          </h3>
          <div className="text-[#101010] opacity-50 text-xs md:text-sm">
            01 - 25 March, 2020
          </div>
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="text-xl md:text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282] w-full md:w-[40dvw]">
            Add Transactions
          </div>
          <div className="relative flex p-2 text-center w-full rounded-md font-semibold text-lg md:text-xl bg-[rgb(237,240,246,1)]">
            <div
              className={`absolute bg-black w-[50%] top-[6px] left-0 rounded-[4px] h-10 transition-transform duration-300 ease-in-out ${
                transactionType === "Expense"
                  ? "translate-x-[97.5%]"
                  : "translate-x-2"
              }`}
            />

            <button
              className={`flex-1 py-1 relative z-10 ${
                transactionType === "Expense" ? "" : "text-white"
              }`}
              onClick={() => setTransactionType("Income")}
            >
              Income
            </button>

            <button
              className={`flex-1 py-1 relative z-10 ${
                transactionType === "Expense" ? "text-white" : ""
              }`}
              onClick={() => setTransactionType("Expense")}
            >
              Expense
            </button>
          </div>
          <div className="flex flex-col w-full md:w-[90%] lg:w-[80%] mb-8 md:mb-14">
            <select
              onChange={(e) => SetSelectCatagory(e.target.value)}
              value={SelectCatagory}
              className="select text-sm md:text-base p-3 md:p-[10px] mb-4 mt-2"
            >
              <option value="Select Category" disabled>
                Select Category
              </option>
              <option value="Grocery">Grocery</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing">Housing</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Entertainment">Entertainment</option>
            </select>

            <select
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={PaymentMethod}
              className="select text-sm md:text-base p-3 md:p-[10px] mb-4"
            >
              <option value="Select Payment Method" disabled>
                Select Payment Method
              </option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
            </select>

            <input
              type="text"
              required
              value={AmountSpend}
              onChange={(e) => setAmountSpend(e.target.value)}
              className="p-3 md:p-[10px] text-sm md:text-base outline-none border-b-[0.8px] mb-4 placeholder:text-black placeholder:opacity-[51%]"
              placeholder="Amount Spend"
            />

            <input
              type="date"
              value={Time}
              onChange={(e) => setTime(e.target.value)}
              className="p-3 md:p-[10px] text-sm md:text-base outline-none border-b-[0.8px] mb-4 placeholder:opacity-[51%]"
            />

            <input
              type="text"
              value={Remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="p-3 md:p-[10px] text-sm md:text-base outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
              placeholder="Remarks"
            />
          </div>
          <div className="flex w-full justify-evenly gap-4">
            <button
              disabled={disable}
              onClick={handleClear}
              className={`bg-white outline-none text-black border-black border-2 font-semibold w-full md:w-[30%] py-2 rounded-lg text-base md:text-xl ${
                disable ? "cursor-not-allowed" : ""
              }`}
            >
              Clear
            </button>
            <button
              onClick={handleAddExpense}
              className="bg-[#101010] outline-none text-white font-semibold py-2 w-full md:w-[30%] rounded-lg text-base md:text-xl"
            >
              Add
            </button>
          </div>
        </div>
    </DashboardWrapper>
    <ExpenseDetails />
    </>
  );
}
