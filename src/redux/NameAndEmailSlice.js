import { createSlice } from "@reduxjs/toolkit";
import auth from "../appwrite/auth/auth"



const nameAndEmailSlice = createSlice({
    name: "Name&Email",
    initialState: { name: "John Doe", email: "johndoe@mail.net" },
    reducers: {
        changeNameAndEmail: (state, action) => {
            const { name, email } = action.payload;
            state.name = name;
            state.email = email;
        }
    }
});


export const { changeNameAndEmail } = nameAndEmailSlice.actions;

export default nameAndEmailSlice.reducer;