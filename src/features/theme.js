import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = "black";
export const themeSlice = createSlice({
    name: "theme",
    initialState: {value : {initialStateValue}},
    reducers: {
    
        changeColor: (state,action) => {
            state.value = action.payload;
        }
    },
});

export const {changeColor} = themeSlice.actions;
// reducer
export default themeSlice.reducer;