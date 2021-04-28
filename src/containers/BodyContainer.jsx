import * as React from "react";
import abc from "../utils/abcArray"

const BodyContainer = () => {
    const [bodyArr, setBodyArr] = React.useState([])
  
    React.useEffect (() => {
        const arr = abc()
        Promise.all(arr)
        .then(data => setBodyArr(data))
    }, [])

    return (
        <>
            {bodyArr.length > 0 && bodyArr.map( (movie, i) => {
                return (
                <article className="media" key={i}>
                    <figure className="media-left">
                        <p className="image is-128x128">
                            <img src={movie.Poster} alt={`Poster ${movie.Title}`}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <h1 className="title is-1">
                                <strong>{movie.Title}</strong>
                            </h1>
                                <h4>{movie.Year}</h4>               
                        </div>
                    </div>
                </article>
                )
            })}

        </>
    )

}

export default BodyContainer;