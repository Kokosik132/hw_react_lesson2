import {combineReducers, configureStore} from "@reduxjs/toolkit";

import counterReducer from "./slices/counter_slice";
import userReducer from "./slices/user_slice";


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store