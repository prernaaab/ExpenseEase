import React, { useState, useEffect } from "react";
import { Account } from "appwrite";
import { useDispatch } from "react-redux";
import { addExpense, client } from "../../redux/expenseSlice";

const account = new Account(client);

export default function AddExpense() {
  const dispatch = useDispatch();
  const [Time, setTime] = useState("");
  const [userId, setUserId] = useState(null);
  const [Remarks, setRemarks] = useState("");
  const [AmountSpend, setAmountSpend] = useState("");
  const [SelectCatagory, SetSelectCatagory] = useState("Select Category");
  const [PaymentMethod, setPaymentMethod] = useState("Select Payment Method");

  useEffect(() => {
    // Get user details from Appwrite Account
    const getUserId = async () => {
      try {
        const user = await account.get();
        setUserId(user.$id); // Set userId
      } catch (error) {
        console.error("Failed to get user details:", error);
      }
    };

    getUserId();
  }, []);

  const handleAddExpense = () => {
    const expenseData = {
      SelectCatagory,
      PaymentMethod,
      AmountSpend: parseFloat(AmountSpend),
      Time,
      Remarks,
      userId,
    };

    dispatch(addExpense(expenseData));

    setTime("");
    setRemarks("");
    setAmountSpend("");
    SetSelectCatagory("Select Category");
    setPaymentMethod("Select Payment Method");
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
            onChange={(e) => SetSelectCatagory(e.target.value)}
            value={SelectCatagory}
            className="bg-white p-[10px] hover:cursor-pointer opacity-[51%] border-b-[1px]"
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
            className="bg-white p-[10px] hover:cursor-pointer opacity-[51%] border-b-[1px]"
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
            value={AmountSpend}
            onChange={(e) => setAmountSpend(e.target.value)}
            className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
            placeholder="AmountSpend"
          />

          <input
            type="text"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
            placeholder="Time"
          />

          <input
            type="text"
            value={Remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="p-[10px] outline-none border-b-[0.8px] placeholder:text-black placeholder:opacity-[51%]"
            placeholder="Remarks"
          />
        </div>

        <button
          onClick={handleAddExpense}
          className="bg-[#101010] outline-none md:translate-x-[14dvw] max-md:w-full text-white font-semibold py-3 w-[40%] rounded-lg text-2xl"
        >
          Add
        </button>
      </div>
    </div>
  );
}
