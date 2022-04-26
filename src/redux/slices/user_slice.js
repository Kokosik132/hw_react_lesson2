import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {user} = action.payload;
            const newUser = {id: new Date().getTime(), name:user}
            state.users.push(newUser)
        }
    }
});

const {reducer: userReducer, actions: {add}} = userSlice;

export default userReducer

export const userActions = {
    add
}