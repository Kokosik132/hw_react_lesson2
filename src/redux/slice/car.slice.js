import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../service";


const initialState = {
    cars: [],
    status: null,
    formErrors: {}
}

const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(             // тут змінили назву на creatAsync Добавили Async
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            // return data                                            // робимо синхронно
            dispatch(create({car:data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {                 // закоментили асинхронний create
        create:(state, action) => {    // і тут
            state.cars.push(action.payload.car)                     // і тут
        }                                                           // і тут
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [createAsync.fulfilled]: (state, action) => {            // і тут змінили назву Async
            // state.cars.push(action.payload)                      // заміна на синхронний редюс
            console.log('completed');
        },
        [createAsync.rejected]: (state, action) => {            // і тут змінили назву Async
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors
        }
    }
});

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll,
    createAsync                                                 // і тут змінили назву Async
}

export {
    carReducer,
    carActions
}