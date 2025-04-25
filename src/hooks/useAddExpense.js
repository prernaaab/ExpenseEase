import { useState, useCallback } from "react";

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
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    }, []);

    const handleAddExpense = async () => {
        setDisable(true);

        const expenseData = {
            expense_category: SelectCatagory,
            payment_method: PaymentMethod,
            amount_spent: parseFloat(AmountSpend) || 0,
            spent_date: Time || getDate(),
            remark: Remarks,
            user_id: userId || "2",
            email: "one@gmail.com"
        };
        try {
            await fetch("http://localhost:8000/expense/add-expense", {
                method: "POST",
                body: JSON.stringify(expenseData),
                headers: {
                    "Content-type": "application/json"
                }
            });
        } catch (e) {
            console.error("Error adding expense:", e);
        } finally {
            handleClear();
            setDisable(false);
        }
    };

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
