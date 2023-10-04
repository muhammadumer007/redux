import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import cartslice from "./cartslice";



const Store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartslice,
    },

});
export default Store;