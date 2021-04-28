
import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const AllTypeList = () => {
    const searchInput = useSelector(state => state.searchInput)
    const series = useSelector(state => state.serieAlike)
    const movies = useSelector(state => state.movieAlike)


    return (
        <>
            <h1 className="title is-2">Here are some results for <strong>"{searchInput}"</strong></h1>
            <h3 className="title is-4 mt-6">Titles</h3>

            {movies.Response === "True" && movies.Search.slice(0,4).map( (movie, i) => {
                return (

                    <article class="media" key={i}>
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src={movie.Poster} alt={`Poster ${movie.Title}`}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{movie.Title}</strong>
                                <br/>
                                {movie.year}
                                <br/>
                            </p>
                        </div>
                    </div>
                </article>
                )
            })}

            <h3 className="title is-4 mt-6">Series</h3>
            {series.Response === "True" && series.Search.slice(0,4).map( (serie, i) => {
                return (
                    <article class="media" key={i}>
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src={serie.Poster} alt={`Poster ${serie.Title}`}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{serie.Title}</strong>
                                <br/>
                                {serie.year}
                                <br/>
                            </p>
                        </div>
                    </div>
                </article>
                )
            })}
        </>
    )

}

export default AllTypeList;