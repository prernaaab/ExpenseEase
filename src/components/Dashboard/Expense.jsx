import Graph from "./Graph";
import grocery from "../../assets/grocery.png";
import useExpenseData from "../../hooks/useExpenseData";
import entertainment from "../../assets/entertainment.png";

// Assuming Appwrite client is already set up in your project

const imgs = [entertainment, grocery];

export default function Expense() {
  const { expenses, status, error } = useExpenseData();

  return (
    <div className="dashboardParent w-[50dvw] max-lg:w-full">
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
        <h4 className="text-2xl font-semibold mb-5">Your Expenses</h4>
        {status === "loading" && <p>Loading expenses...</p>}
        {status === "succeeded" && expenses.length > 0 ? (
          <ul className="list-disc">
            {expenses.map((expense) => (
              <li
                key={expense.$id}
                className="mb-2 list-none flex w-full justify-between"
              >
                <div className="flex gap-x-5">
                  <div>
                    <img src={entertainment} alt="img" className="h-12" />
                  </div>
                  <div className="h-full">
                    <div className="font-semibold text-[#273240]">
                      {expense.SelectCatagory}
                    </div>
                    <span className="text-[rgba(64,72,82,0.5)] text-sm">
                      {expense.Time}.{expense.Remarks}.{expense.PaymentMethod}
                    </span>
                  </div>
                </div>
                <div className="text-[#273240] font-semibold">
                  {expense.AmountSpend}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses found</p>
        )}
      </div>
    </div>
  );
}
