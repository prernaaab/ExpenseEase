import { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchExpenses, client } from "../redux/expenseSlice";


function useExpenseData() {
    // const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(2);
    // const { expenses, status, error } = useSelector((state) => state.expenses);
    useEffect(() => {
        fetch("http://localhost:8000/expense/expense-all?user_id=2&email=one@gmail.com")
            .then((res) => res.json())
            .then((resData) => {
                // Make sure the structure matches what your backend returns
                if (resData) {
                    setData(resData.data || []);
                }
            })
            .catch((error) => {
                console.error("Error fetching expenses:", error);
            });
    }, []);

    const memoizedData = useMemo(() => { return data }, [data]);

    return memoizedData;
    // useEffect(() => {
    //     // Get user details from Appwrite Account
    //     const getUserId = async () => {
    //         try {
    //             const user = await account.get();
    //             setUserId(user.$id); // Set userId
    //         } catch (error) {
    //             console.error("Failed to get user details:", error);
    //         }
    //     };

    //     getUserId();
    // }, []);

    // useEffect(() => {
    //     if (userId && expenses.length === 0) {
    //         dispatch(fetchExpenses(userId));
    //     }
    // }, [dispatch, userId, expenses.length]);

    // return { expenses, status, error };
}

export default useExpenseData;