import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: []
}


const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {dog} = action.payload;
            const newDog = {id: new Date().getTime(), name:dog}
            state.dogs.push(newDog)
        }
    }
});

const {reducer: dogReducer, actions: {add}} = dogSlice;

export default dogReducer

export const dogActions = {
    add
}