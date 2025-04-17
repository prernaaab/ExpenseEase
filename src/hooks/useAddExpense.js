import { useState, useCallback, useEffect } from "react";

export default function useAddExpense() {
    const [Time, setTime] = useState("");
    const [userId, setUserId] = useState("");
    const [Remarks, setRemarks] = useState("");
    const [disable, setDisable] = useState(false);
    const [AmountSpend, setAmountSpend] = useState("");
    const [SelectCatagory, SetSelectCatagory] = useState("Select Category");
    const [PaymentMethod, setPaymentMethod] = useState("Select Payment Method");

    const getDate = useCallback(() => {
        const date = new Date();
        let dateToday = `${date.getDate()}-${date.getMonth() + 1
            }-${date.getFullYear()}`;
        return dateToday;
    }, []);


    const handleAddExpense = () => {
        setDisable(true);
        const expenseData = {
            SelectCatagory,
            PaymentMethod,
            AmountSpend: parseFloat(AmountSpend) || 0,
            Time: Time || getDate(),
            Remarks,
            userId: "1384dfedb2",
        };
        console.log(expenseData)
        // dispatch(addExpense(expenseData));

        handleClear();
    };

    // useEffect(() => {
    // TODO : Make an API call to add expense to the backend.
    // fetch("http://localhost:8000/expense/add-expense")
    // }, [])

    const handleClear = () => {
        setTime("");
        setRemarks("");
        setAmountSpend("");
        SetSelectCatagory("Select Category");
        setPaymentMethod("Select Payment Method");
        setDisable(false);
    };

    return {
        Time,
        setTime,
        userId,
        setUserId,
        Remarks,
        setRemarks,
        AmountSpend,
        setAmountSpend,
        SelectCatagory,
        SetSelectCatagory,
        PaymentMethod,
        disable,
        setPaymentMethod,
        handleAddExpense,
        handleClear
    };
}