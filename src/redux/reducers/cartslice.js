import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        add(){},
        edit(){},
        del(){}
    }
})
export const { add, edit, del } = CartSlice.actions;
export default CartSlice.reducer;