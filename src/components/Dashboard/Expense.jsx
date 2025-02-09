import { Account } from "appwrite";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import { fetchExpenses, client } from "../../redux/expenseSlice";

// Assuming Appwrite client is already set up in your project
const account = new Account(client);

export default function Expense() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);

  // Fetch expenses from Redux store
  const { expenses, status, error } = useSelector((state) => state.expenses);

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

  useEffect(() => {
    // Fetch expenses only when userId is available
    if (userId) {
      dispatch(fetchExpenses(userId));
    }
  }, [dispatch, userId]);

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

      {/* Show expenses below the graph */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold mb-5">Your Expenses</h4>
        {status === "loading" && <p>Loading expenses...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && expenses.length > 0 ? (
          <ul className="list-disc ml-5">
            {expenses.map((expense) => (
              <li key={expense.$id} className="mb-2">
                <span className="font-semibold">{expense.SelectCatagory}</span>:{" "}
                {expense.AmountSpend} - {expense.Time}
                {/* <br /> */}
                {/* <span className="italic">Remarks: {expense.}</span> */}
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
