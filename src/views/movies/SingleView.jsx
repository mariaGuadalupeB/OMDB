import * as React from "react";
import { useSelector } from "react-redux";

const SingleView = () => {
        
    const {
        Title, 
        Year, 
        Rated, 
        Runtime, 
        Genre, 
        Released, 
        Poster, 
        Director, 
        Actors, 
        Plot, 
        Writer
    } = useSelector(state => state.selectedMovie)
    

    return (
        <>
            <h1 className="title is-2">The best match was <strong>"{Title}"</strong> ! </h1>
            <div className="my-6 mx-6" >
                <div className="columns">
                    <div className="card column">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-2">{Title} ({Year})</p>
                                <p className="subtitle is-5">{Rated} | {Runtime} | {Genre} | {Released} </p>
                            </div>
                        </div>
                        
                        <div className="content">
                            <dl className="mb-0"><em> <strong>Director: </strong></em>{Director}</dl>
                            <dl className="mb-0"><em><strong>Writers: </strong></em>{Writer} </dl>
                            <dl className="mb-0"><em><strong>Stars: </strong></em>{Actors} </dl> 
                        </div>

                        <div className="content subtitle is-4 mt-6">
                            {Plot}
                        </div>
                    </div>

                    <div className="card column-narrow"> 
                        <div className="card-content">
                            <div className="card-image">
                                <img src={Poster} alt={`Poster ${Title}`} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default SingleView;
