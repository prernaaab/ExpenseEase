import React, { useState, useEffect, useMemo } from "react";
// import { Account } from "appwrite";
// import { useDispatch } from "react-redux";
// import { addExpense, client } from "../../redux/expenseSlice";

export default function AddExpense() {
  // const dispatch = useDispatch();
  // let date = useMemo(() => new Date(), []);
  const [Time, setTime] = useState("");
  const [userId, setUserId] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [disable, setDisable] = useState(false);
  const [AmountSpend, setAmountSpend] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const [SelectCatagory, SetSelectCatagory] = useState("Select Category");
  const [PaymentMethod, setPaymentMethod] = useState("Select Payment Method");

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

  const date = new Date();
  let one = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const handleAddExpense = () => {
    setDisable(true);
    const expenseData = {
      SelectCatagory,
      PaymentMethod,
      AmountSpend: parseFloat(AmountSpend) || 0,
      Time: Time || one,
      Remarks,
      userId,
    };
    // dispatch(addExpense(expenseData));

    handleClear();
  };

  const handleClear = () => {
    setTime("");
    setRemarks("");
    setAmountSpend("");
    SetSelectCatagory("Select Category");
    setPaymentMethod("Select Payment Method");
    setDisable(false);
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
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282] md:w-[40dvw]">
          Add Transactions
        </div>
        <div className="relative flex p-2 text-center w-full rounded-md font-semibold text-xl bg-[rgb(237,240,246,1)]">
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
        <div className="flex flex-col w-full mb-14">
          <select
            onChange={(e) => SetSelectCatagory(e.target.value)}
            value={SelectCatagory}
            className="select"
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
            className="select"
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
            className="p-[10px] outline-none border-b-[0.8px]  placeholder:text-black placeholder:opacity-[51%]"
            placeholder="Amount Spend"
          />

          <input
            type="date"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            className="p-[10px] outline-none border-b-[0.8px] placeholder:opacity-[51%]"
          />

          <input
            type="text"
            value={Remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
            placeholder="Remarks"
          />
        </div>
        <div className="flex w-full justify-evenly">
          <button
            disabled={disable}
            onClick={handleClear}
            className={`bg-white outline-none text-black border-black border-2 font-semibold w-[30%] rounded-lg text-xl ${
              disable ? "cursor-not-allowed" : ""
            }`}
          >
            Clear
          </button>
          <button
            onClick={handleAddExpense}
            className="bg-[#101010] outline-none text-white font-semibold py-2 w-[30%] rounded-lg text-xl"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
