import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "@/app/counter/CounterSlice.js";
import UserReducer from "@/app/user/userSlice.js";

// Create Store
const store = configureStore({
    reducer: {
        counter: CounterReducer,
        user: UserReducer
    },
    devTools: true
});


// export Store
export default store;