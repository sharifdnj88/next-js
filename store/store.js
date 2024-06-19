import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "@/app/counter/CounterSlice.js"

// Create Store
const store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
    devTools: true
});


// export Store
export default store;