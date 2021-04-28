import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import selectedMovieReducer from "./selectedMovie";
import movieAlikeReducer from "./movieAlike";
import serieAlikeReducer from "./serieAlike";
import searchInputReducer from "./searchInput"
import setSearchOptionReducer from "./searchOption"
import inputUserReducer from "./inputNewUser"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        selectedMovie: selectedMovieReducer,
        movieAlike: movieAlikeReducer,
        serieAlike: serieAlikeReducer,
        searchInput: searchInputReducer,
        searchOption: setSearchOptionReducer,
        inputUser: inputUserReducer,
    },
});

export default store;