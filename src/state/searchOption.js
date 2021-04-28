
import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchOption = createAction("SET_SEARCH_OPTION")

const setSearchOptionReducer = createReducer("s", {
    [setSearchOption]: (state, action) => action.payload
});

export default setSearchOptionReducer; 

export const searchOptionHandler = (e) => (dispatch) => {
    const value = e.target.value
    dispatch(setSearchOption(value))
} 
