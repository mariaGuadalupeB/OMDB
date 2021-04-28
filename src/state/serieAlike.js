
import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSerieAlike = createAction("SET_SERIE_ALIKE")

const serieAlikeReducer = createReducer([], {
    [setSerieAlike]: (state, action) => action.payload
});

export default serieAlikeReducer; 

