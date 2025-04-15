import Graph from "./Graph";
import QuickAdd from "./QuickAdd";
import Grocery from "../../assets/grocery.png";
import Housing from "../../assets/housing.png";
import DashboardWrapper from "./DashBoardWrapper";
// import useExpenseData from "../../hooks/useExpenseData";
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
    <DashboardWrapper>
      <div className="mb-10">
        <h3 className="text-4xl font-semibold mb-2 max-md:text-3xl">Expense</h3>
        <div className="text-[#101010] opacity-50 text-sm">
          01 - 25 March, 2020
        </div>
      </div>
      <div className="w-full">
        <Graph />
      </div>

      <div className="mt-10">
        <div className="border-b-[#dedede92] mb-4 border-b-2 flex items-center justify-between">
          <h4 className="text-xl font-semibold">Today</h4>
          <button className="text-[#D8D8D8] foont-bold text-[2.3rem] tracking-tighter">
            &#183; &#183; &#183;
          </button>
        </div>
        {/* {status === "loading" && <p>Loading expenses...</p>} */}
        {/* {status === "succeeded" && expenses.length > 0 ? ( */}
        <ul className="list-disc h-[9.8rem] overflow-y-auto">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="mb-2 list-none flex w-full justify-between"
            >
              <div className="flex gap-x-5 items-center">
                <div>
                  <img
                    src={getImage(expense.SelectCatagory)}
                    alt="img"
                    className="h-10"
                  />
                </div>
                <div className="h-full">
                  <div className="font-semibold text-[#273240]">
                    {expense.SelectCatagory}
                  </div>
                  <span className="text-[rgba(64,72,82,0.5)] text-sm">
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
              <div className="text-[#273240] font-semibold">
                {expense.AmountSpend}
              </div>
            </li>
          ))}
        </ul>
        {/* ) : (<p>No expenses found</p> */}
        {/* )} */}
        <QuickAdd />
      </div>
    </DashboardWrapper>
  );
}

function getImage(category) {
  const foundImg = imgs.find((img) => Object.keys(img)[0] === category);
  return foundImg ? Object.values(foundImg)[0] : null;
}
