import { createAction, createReducer } from "@reduxjs/toolkit";

export const setInputUser = createAction("SET_INPUT_NEW_USER")
    
const inputUserReducer = createReducer({}, {
    [setInputUser]: (state, action) => action.payload
});
    
export default inputUserReducer; 
    
