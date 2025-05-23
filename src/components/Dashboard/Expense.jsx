import Graph from "./Graph";
import Grocery from "../../assets/grocery.png";
import Housing from "../../assets/housing.png";
import DashboardWrapper from "./DashBoardWrapper";
import useExpenseData from "../../hooks/useExpenseData";
import Entertainment from "../../assets/entertainment.png";
import Transportation from "../../assets/transportation.png";
import Food_and_Drink from "../../assets/food_and_drinks.png";

const imgs = [
  { Entertainment: Entertainment },
  { Grocery: Grocery },
  { Transportation: Transportation },
  { Housing: Housing },
  { "Food and Drink": Food_and_Drink },
];

export default function Expense() {
  const Data = useExpenseData();

  return (
    <>
      <DashboardWrapper>
        <div className="flex flex-col h-[87dvh] w-full p-4">
          {/* Header Section */}
          <div className="mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
              ExpenseEase
            </h3>
            <div className="text-[#101010] opacity-50 text-xs md:text-sm">
              01 - 30 April, 2025
            </div>
          </div>

          {/* Content Container with proper scrolling */}
          <div className="flex flex-col flex-grow overflow-hidden">
            {/* Graph Section */}
            <Graph />

            {/* Transactions Section */}
            <div className="flex-grow overflow-hidden flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-2 px-3">
                <h4 className="text-lg font-semibold">Today</h4>
              </div>

              <div className="border-b-[#dedede92] border-b-2 mb-4" />
              <ul className="flex-grow overflow-y-auto min-h-[40dvh] space-y-2 pr-2">
                {Data?.length > 0 ? (
                  Data?.map((expense) => (
                    <li
                      key={expense.expense_id}
                      className="list-none flex flex-col sm:flex-row w-full justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex gap-x-5 items-center">
                        <div className="min-w-[40px]">
                          <img
                            src={getImage(expense.expense_category)}
                            alt={expense.expense_category}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-semibold text-[#273240]">
                            {expense.expense_category}
                          </div>
                          <span className="text-[rgba(64,72,82,0.5)] text-sm flex flex-wrap items-center gap-1">
                            {expense.created_at}
                            {expense.remark && (
                              <>
                                <span className="mx-1">&#183;</span>
                                {expense.remark}
                              </>
                            )}
                            <span className="mx-1">&#183;</span>
                            {expense.payment_method}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#273240] font-semibold mt-2 sm:mt-0 sm:ml-4">
                        ₹{expense.amount_spent}
                      </div>
                    </li>
                  ))
                ) : (
                  <div>No data found</div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}

function getImage(category) {
  const foundImg = imgs.find((img) => Object.keys(img)[0] === category);
  return foundImg ? Object.values(foundImg)[0] : null;
}
