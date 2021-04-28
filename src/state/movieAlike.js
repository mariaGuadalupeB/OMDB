import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMovieAlike = createAction("SET_MOVIE_ALIKE")
    
const movieAlikeReducer = createReducer([], {
    [setMovieAlike]: (state, action) => action.payload
});
    
export default movieAlikeReducer; 
    