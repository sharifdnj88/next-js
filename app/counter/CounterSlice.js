import { createSlice } from "@reduxjs/toolkit";

// Create Slice
const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count : 0
    },
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    },
    extraReducers: () => {}
});


// selectors
export const selectCounter = (state) => state.counter;


// actions
export const { increment, decrement } = CounterSlice.actions;

// export CounterSlice
export default CounterSlice.reducer;