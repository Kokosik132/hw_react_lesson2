import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices";

const rootReducer = combineReducers({
    episodes: episodeReducer
});

export const store = configureStore({
    reducer: rootReducer
});