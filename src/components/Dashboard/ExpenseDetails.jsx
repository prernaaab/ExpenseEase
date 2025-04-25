import React from "react";
import GetSumByCategory from "./GetSumByCategory";
import useExpenseData from "../../hooks/useExpenseData";

export default function ExpenseDetails() {
  const Data = useExpenseData();

  const totalByCategory = GetSumByCategory(Data);

  const totalAmount = Data.map((a) => Number(a.amount_spent)).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="bg-[#F9FAFC] lg:w-[clamp(23rem,100%,7rem)] min-h-screen lg:rounded-r-3xl lg:min-h-[94.65dvh] flex flex-col justify-between overflow-y-auto">
      <div className="p-6 lg:py-8">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-[clamp(16px,1.4dvw,21px)] font-semibold">
            Where your money go?
          </h3>
        </div>
        <div className="space-y-4">
          {totalByCategory.length > 0 ? (
            totalByCategory.map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex text-sm justify-between -mb-3">
                  <div className="text-xs">{item.category}</div>
                  <div>{item.total}</div>
                </div>
                <progress
                  max={totalAmount}
                  value={item.total}
                  className="h-1 w-full"
                />
              </div>
            ))
          ) : (
            <p>No expenses found</p>
          )}
        </div>
      </div>
    </div>
  );
}
