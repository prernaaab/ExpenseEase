import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feedbackList: [],
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addFeedback: (state, action) => {
            state.feedbackList.push(action.payload);
        },
        setFeedbackList: (state, action) => {
            state.feedbackList = action.payload;
        },
    },
});

export const { addFeedback, setFeedbackList } = feedbackSlice.actions;
export default feedbackSlice.reducer;
