import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: []
}


const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {cat} = action.payload;
            const newCat = {id: new Date().getTime(), name:cat}
            state.cats.push(newCat)
        }
    }
});

const {reducer: catReducer, actions: {add}} = catSlice;

export default catReducer

export const catActions = {
    add
}