import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../service";


const initialState = {
    cars: [],
    status: null
}

const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }

);

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAll.pending]:(state, actions) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]:(state, actions) => {
            state.status = 'fulfilled'
            state.cars = actions.payload
        },
        [getAll.rejected]:(state, actions) => {
            state.status = 'rejected'
        }
    }
});

const {reducer: carReducer, actions: {}} = carSlice;

const carActions = {
    getAll
}

export {
    carReducer,
    carActions
}