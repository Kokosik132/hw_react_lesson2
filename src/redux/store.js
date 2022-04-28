import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slice/cat_Slice";
import dogReducer from "./slice/dog_Slice";

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store