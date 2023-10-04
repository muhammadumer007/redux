import {createSlice} from '@reduxjs/toolkit'




const userSlice = createSlice({
    name :"user",
    initialState: {
        id: 1,
        name: 'acs',
        
    },
    reducers: {
        add() { },
        edit(){ },
    },
    
});
export  const { add, edit } = userSlice.actions;
export default userSlice.reducer;