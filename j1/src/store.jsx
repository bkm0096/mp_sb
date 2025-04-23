import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice.jsx";
import loginSlice from "./slices/loginSlice.jsx";
import productsSlice from "./slices/productsSlice.js";


const store = configureStore({
    reducer: {
        counter: countSlice,
        login: loginSlice,
        products: productsSlice
    }
})

export default store