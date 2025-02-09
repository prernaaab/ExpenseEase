import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Client, Databases } from 'appwrite';

// Appwrite setup
const client = new Client().setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
const databases = new Databases(client);

// Thunk to fetch user expenses
export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await databases.listDocuments('import.meta.env.VITE_APPWRITE_DATABASE_ID', 'VITE_APPWRITE_COLLECTION_ID_USEREXPENSE', [
                Query.equal('userId', userId),
            ]);
            return response.documents;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk to add an expense
export const addExpense = createAsyncThunk(
    'expenses/addExpense',
    async (expenseData, { rejectWithValue }) => {
        try {
            const response = await databases.createDocument('YOUR_DATABASE_ID', 'YOUR_COLLECTION_ID', 'unique()', expenseData);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice for expenses
const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExpenses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchExpenses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.expenses = action.payload;
            })
            .addCase(fetchExpenses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addExpense.fulfilled, (state, action) => {
                state.expenses.push(action.payload);
            });
    },
});

export default expensesSlice.reducer;
