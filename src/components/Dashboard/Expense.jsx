// import Graph from "./Graph";
import QuickAdd from "./QuickAdd";
import Grocery from "../../assets/grocery.png";
import Housing from "../../assets/housing.png";
// import useExpenseData from "../../hooks/useExpenseData";
import Entertainment from "../../assets/entertainment.png";
import Transportation from "../../assets/transportation.png";
import Food_and_Drink from "../../assets/food_and_drinks.png";
import { useState } from "react";
import ExpenseDetails from './ExpenseDetails';

const imgs = [
  { Entertainment: Entertainment },
  { Grocery: Grocery },
  { Transportation: Transportation },
  { Housing: Housing },
  { "Food and Drink": Food_and_Drink },
];

export default function Expense() {
  // const { expenses, status } = useExpenseData();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[94.65dvh] w-full">
      <div className="w-full lg:w-[calc(100%-21dvw)] p-6 lg:p-8">
      <div className="mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
            ExpenseEase
          </h3>
          <div className="text-[#101010] opacity-50 text-xs md:text-sm">
            01 - 25 March, 2020
          </div>
        </div>

        <div className="mt-6 md:mt-10">
          <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-5">Your Expenses</h4>
          <ul className="list-disc space-y-4 mb-6">
            {/* {status === "loading" && <p>Loading expenses...</p>} */}
            {/* {status === "succeeded" && expenses.length > 0 ? ( */}
            {/* {expenses.map((expense) => (
                <li
                  key={expense.$id}
                  className="mb-2 list-none flex w-full justify-between flex-wrap md:flex-nowrap gap-y-2"
                >
                  <div className="flex gap-x-3 md:gap-x-5 items-center">
                    <div>
                      <img
                        src={getImage(expense.SelectCatagory)}
                        alt="img"
                        className="h-8 md:h-10"
                      />
                    </div>
                    <div className="h-full">
                      <div className="font-semibold text-[#273240] text-sm md:text-base">
                        {expense.SelectCatagory}
                      </div>
                      <span className="text-[rgba(64,72,82,0.5)] text-xs md:text-sm">
                        {expense.Time}
                        {expense.Remarks ? (
                          <span> &#183; {`${expense.Remarks}`} &#183; </span>
                        ) : (
                          <span> &#183; </span>
                        )}
                        {expense.PaymentMethod}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#273240] font-semibold text-sm md:text-base">
                    {expense.AmountSpend}
                  </div>
                </li>
              ))} */}
          </ul>
          {/* ) : (<p>No expenses found</p> */}
          {/* )} */}
          <QuickAdd />
        </div>
      </div>
      <ExpenseDetails />
    </div>
  );
}

function getImage(category) {
  const foundImg = imgs.find((img) => Object.keys(img)[0] === category);
  return foundImg ? Object.values(foundImg)[0] : null;
}
