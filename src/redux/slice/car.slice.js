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
const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCarById({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const updateById = createAsyncThunk(
    'updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
            dispatch(updateCarById({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const createAsync = createAsyncThunk(             // тут змінили назву на creatAsync Добавили Async
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            // return data                                            // робимо синхронно
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {                                                    // закоментили асинхронний create
        create: (state, action) => {    // і тут
            state.cars.push(action.payload.car)                     // і тут
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1);
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car};
        }

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

const {reducer: carReducer, actions: {create, deleteCarById, updateCarById}} = carSlice;

const carActions = {
    getAll,
    createAsync,                                                 // і тут змінили назву Async
    deleteById,
    updateById,
}

export {
    carReducer,
    carActions
}