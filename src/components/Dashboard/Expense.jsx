import Graph from "./Graph";
import QuickAdd from "./QuickAdd";
import Grocery from "../../assets/grocery.png";
import Housing from "../../assets/housing.png";
import DashboardWrapper from "./DashBoardWrapper";
// import useExpenseData from "../../hooks/useExpenseData";
import Entertainment from "../../assets/entertainment.png";
import Transportation from "../../assets/transportation.png";
import Food_and_Drink from "../../assets/food_and_drinks.png";
import ExpenseDetails from "./ExpenseDetails";

const imgs = [
  { Entertainment: Entertainment },
  { Grocery: Grocery },
  { Transportation: Transportation },
  { Housing: Housing },
  { "Food-and-Drink": Food_and_Drink },
];

export default function Expense() {
  // const { expenses, status } = useExpenseData();

  const expenses = [
    {
      id: 1,
      SelectCatagory: "Grocery",
      Time: "1 - 2 - 2003",
      Remarks: "one",
      PaymentMethod: "UPI",
      AmountSpend: "12000",
    },
    {
      id: 2,
      SelectCatagory: "Entertainment",
      Time: "1 - 2 - 2003",
      Remarks: "two",
      PaymentMethod: "Cash",
      AmountSpend: "2000",
    },
    {
      id: 3,
      SelectCatagory: "Transportation",
      Time: "1 - 2 - 2003",
      Remarks: "three",
      PaymentMethod: "Card",
      AmountSpend: "1000",
    },
    {
      id: 4,
      SelectCatagory: "Housing",
      Time: "1 - 2 - 2003",
      Remarks: "four",
      PaymentMethod: "UPI",
      AmountSpend: "4000",
    },
  ];

  return (
    <>
      <DashboardWrapper>
      <div className="mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          ExpenseEase
        </h3>
        <div className="text-[#101010] opacity-50 text-xs md:text-sm">
          01 - 24 March, 2025
        </div>
      </div>
        <div className="flex flex-col h-[87dvh] w-full p-4">
          {/* Header Section */}
          

          {/* Content Container with proper scrolling */}
          <div className="flex flex-col flex-grow overflow-hidden">
            {/* Graph Section */}
            <Graph />

            {/* Transactions Section */}
            <div className="flex-grow overflow-hidden flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-4 px-3">
                <h4 className="text-xl font-semibold">Today</h4>
                <button className="text-[#D8D8D8] font-bold text-[2.3rem] tracking-[0.24rem]">
                  &#183;&#183;&#183;
                </button>
              </div>

              <div className="border-b-[#dedede92] border-b-2 mb-4" />
              <ul className="flex-grow overflow-y-auto max-h-[13rem] space-y-2 pr-2">
                {expenses.map((expense) => (
                  <li
                    key={expense.id}
                    className="list-none flex flex-col sm:flex-row w-full justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex gap-x-5 items-center">
                      <div className="min-w-[40px]">
                        <img
                          src={getImage(expense.SelectCatagory)}
                          alt={expense.SelectCatagory}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-[#273240]">
                          {expense.SelectCatagory}
                        </div>
                        <span className="text-[rgba(64,72,82,0.5)] text-sm flex flex-wrap items-center gap-1">
                          {expense.Time}
                          {expense.Remarks && (
                            <>
                              <span className="mx-1">&#183;</span>
                              {expense.Remarks}
                            </>
                          )}
                          <span className="mx-1">&#183;</span>
                          {expense.PaymentMethod}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#273240] font-semibold mt-2 sm:mt-0 sm:ml-4">
                      ₹{expense.AmountSpend}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <QuickAdd />
      </DashboardWrapper>
      <ExpenseDetails />
    </>
  );
}

function getImage(category) {
  const foundImg = imgs.find((img) => Object.keys(img)[0] === category);
  return foundImg ? Object.values(foundImg)[0] : null;
}
