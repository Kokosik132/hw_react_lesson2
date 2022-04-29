import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slice/cat_Slice";
import dogReducer from "./slice/dog_Slice";

const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store