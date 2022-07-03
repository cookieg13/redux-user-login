import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {name: "", age: 0, email: ""};
export const userSlice = createSlice({
    name: "userr",
    initialState: {value : initialStateValue},
    //reducers
    reducers: {
        //state has current state values
        login: (state,action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    },
});

export const {login, logout} = userSlice.actions;
// reducer
export default userSlice.reducer;