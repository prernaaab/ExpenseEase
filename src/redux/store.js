import feedbackReducer from './feedbackSlice';
import expensesReducer from "./expenseSlice";
import authReducer from "./authSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        feedback: feedbackReducer,
        expenses: expensesReducer,
        auth: authReducer,
    },
});

export default store;
