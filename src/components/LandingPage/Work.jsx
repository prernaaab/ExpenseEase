import React from "react";

export default function Work() {
  return (
    <div className="overflow-hidden grid grid-cols-3 max-xl:grid-cols-2 max-lg:!grid-cols-1 gap-x-3 w-full">
      <div className="max-lg:mb-3">
        <div className="flex items-center relative mb-3 w-full">
          <div className="bg-black text-white py-4 px-6 rounded-full text-xl font-bold">
            1
          </div>
          <div className="bg-black w-full h-[1px] absolute left-14"></div>
        </div>
        <div className=" flex flex-col">
          <div className="bg-[#F8F8F8] px-5 py-3 rounded-2xl max-sm:px-3">
            <h3 className="text-[1.6rem] font-extrabold max-lg:text-[clamp(21px,3dvw,24px)] break-words">
              Step 1: Add Expenses
            </h3>
            <div className="text-[16px] opacity-50 max-w-[19.87rem]">
              Start by adding your expenses to the app. Enter the amount,
              category, and date of each expense.
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:mb-3">
        <div className="flex items-center relative mb-3 w-full">
          <div className="bg-black text-white py-4 px-6 rounded-full text-xl font-bold">
            2
          </div>
          <div className="bg-black w-full h-[1px] absolute left-14"></div>
        </div>
        <div className=" flex flex-col">
          <div className="bg-[#F8F8F8] px-5 py-3 rounded-2xl max-sm:px-3">
            <h3 className="text-[1.6rem] font-extrabold max-lg:text-[clamp(21px,3dvw,24px)] break-words">
              Step 2: Set Budgets
            </h3>
            <div className="text-[16px] opacity-50 max-w-[19.87rem]">
              Set budgets for different expense categories to help you stay on
              track. The app will notify you when you're close to reaching your
              budget limit.
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:mb-3 max-xl:col-span-2 max-lg:col-span-1">
        <div className="flex items-center relative mb-3 w-full">
          <div className="bg-black text-white py-4 px-6 rounded-full text-xl font-bold">
            3
          </div>
          <div className="bg-black w-full h-[1px] absolute left-14"></div>
        </div>
        <div className=" flex flex-col">
          <div className="bg-[#F8F8F8] px-5 py-3 rounded-2xl max-sm:px-3">
            <h3 className="text-[1.6rem] font-extrabold max-lg:text-[clamp(21px,3dvw,24px)] break-words">
              Step 3: Generate Reports
            </h3>
            <div className="text-[16px] opacity-50 max-w-[19.87rem]">
              Generate reports to get a clear overview of your expenses. Analyze
              your spending patterns and make informed financial decisions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
