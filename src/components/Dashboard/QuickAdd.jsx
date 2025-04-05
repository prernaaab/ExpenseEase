import { useState } from "react";
import Show from "../../assets/show.svg";
import useAddExpense from "../../hooks/useAddExpense";

export default function QuickAdd() {
  const [transactionType, setTransactionType] = useState("Income");
  const [openQuickAdd, setOpenQuickAdd] = useState(false);
  const {
    AmountSpend,
    setAmountSpend,
    SelectCatagory,
    SetSelectCatagory,
    PaymentMethod,
    setPaymentMethod,
    handleClear,
  } = useAddExpense();

  function handleQuickAdd() {
    setOpenQuickAdd(!openQuickAdd);
    console.log(1);
  }

  function handleConfirm() {
    setOpenQuickAdd(false);
  }
  return (
    <>
      <button onClick={handleQuickAdd}>
        <img src={Show} alt="img" />
      </button>
      {openQuickAdd && (
        <div className="w-[30%] bg-[#F0F0F0] rounded-md p-4">
          <h3 className="font-semibold">Quick Add</h3>
          <div className="flex text-center w-full rounded-xl font-semibold bg-[rgb(0,0,0)] mb-3">
            <button
              className={`flex-1 py-1 relative z-10 ${
                transactionType === "Expense"
                  ? "text-[rgba(255,255,255,0.4)]"
                  : "text-white"
              }`}
              onClick={() => setTransactionType("Income")}
            >
              Income
            </button>

            <button
              className={`flex-1 py-1 relative z-10 ${
                transactionType === "Expense"
                  ? "text-white"
                  : "text-[rgba(255,255,255,0.4)]"
              }`}
              onClick={() => setTransactionType("Expense")}
            >
              Expense
            </button>
          </div>
          <div className="flex flex-col w-full mb-14">
            <input
              type="text"
              required
              value={AmountSpend}
              onChange={(e) => setAmountSpend(e.target.value)}
              className="p-[10px] outline-none bg-transparent border-y-[0.9px] placeholder:text-black placeholder:text-sm placeholder:opacity-[51%]"
              placeholder="Amount Spend"
            />
            <select
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={PaymentMethod}
              className="select px-0 border-y-[0.9px] bg-transparent"
            >
              <option value="Select Payment Method" disabled>
                Select Payment Method
              </option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
            </select>
            <select
              onChange={(e) => SetSelectCatagory(e.target.value)}
              value={SelectCatagory}
              className="select px-0 border-y-[0.9px] bg-transparent"
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
          </div>
        </div>
      )}
    </>
  );
}
