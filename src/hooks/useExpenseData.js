import { Account } from "appwrite";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses, client } from "../redux/expenseSlice";

const account = new Account(client);

function useExpenseData() {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null);
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

    return { expenses, status, error };

}

export default useExpenseData;