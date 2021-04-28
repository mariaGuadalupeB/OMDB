import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchInput = createAction("SET_SEARCH_INPUT")
    
const searchInputReducer = createReducer("", {
    [setSearchInput]: (state, action) => action.payload
});
    
export default searchInputReducer; 
    
export const inputHandler = (e) => (dispatch) => {
        const value = e.target.value
        dispatch(setSearchInput(value))
} 

