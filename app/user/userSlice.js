import { createSlice } from "@reduxjs/toolkit";
import { createUser, fetchUsers } from "./userApi.js";

// Create Slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        users : [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.users = state.users ?? [];
            state.users.push(action.payload);
        });;
    }
});


// selectors
export const selectUser = (state) => state.user;


// actions
export const { } = userSlice.actions;

// export userSlice
export default userSlice.reducer;