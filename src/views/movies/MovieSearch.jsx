import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { inputHandler } from "../../state/searchInput"
import { searchOptionHandler } from "../../state/searchOption"
import { setSelectedMovie } from "../../state/selectedMovie"
import { setMovieAlike } from "../../state/movieAlike"
import { setSerieAlike } from "../../state/serieAlike"

const MovieSearch = () => {
    const dispatch = useDispatch()
       
    const searchInput = useSelector(state => state.searchInput)
    const searchOption = useSelector(state => state.searchOption)
    const history = useHistory();
    
    const searchHandler = (e) => {
        e.preventDefault();
        if(searchOption === "t"){
            axios.get(`https://www.omdbapi.com/?apikey=4eca924c&${searchOption}=${searchInput}`)
            .then(res => res.data)
            .then(data => {
                if(data.Response === "True"){
                    dispatch(setSelectedMovie(data))
                    history.push("/movie");
                }else{
                    history.push("/error");
                }            
            })
        }else{            
            const series = axios.get(`https://www.omdbapi.com/?apikey=4eca924c&${searchOption}=${searchInput}&Type=series`).then(res => res.data)
            const movie = axios.get(`https://www.omdbapi.com/?apikey=4eca924c&${searchOption}=${searchInput}&Type=movie`).then(res => res.data)
            
            Promise.all([series, movie])
            .then((data) => {
                if(data[0].Response === "True" || data[1].Response === "True" ){
                    const [series, movie] = data
                    dispatch(setSerieAlike(series))
                    dispatch(setMovieAlike(movie))
                    history.push("/general");
                }else{
                        history.push("/error");
                    }
                })
        }
    }
    
    return (
        <>
            <form onSubmit={searchHandler} className="pt-3">
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <div className="select">
                            <select name="category" onChange={(e) => dispatch(searchOptionHandler(e))}>
                                <option value="s">All</option>
                                <option value="t">Title</option>
                            </select>
                        </div>
                    </div>

                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Text here!"
                            value={searchInput} 
                            onChange={(e) => dispatch(inputHandler(e))}
                        />
                    </div>

                    <div className="control">
                        <button className="button is-primary"> SEARCH </button>
                    </div>                
                </div>
            </form>
        </>
    )

}

export default MovieSearch;