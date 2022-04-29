import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: []}

const dog_Slice = createSlice({
    name: 'dog_Slice',
    initialState,
    reducers: {

    }
})


const {reducer: dogReducer, actions: { }} = dog_Slice;

export default dogReducer