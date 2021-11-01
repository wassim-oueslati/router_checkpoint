import React from 'react';
import {useParams } from "react-router-dom";

function Trailer({movies}) {
    const { movieId } = useParams();
    return (
        <div>
            
            <h1>{movies.find((film) => film.id=== Number(movieId)).trailerURL}</h1>
            <h1>{movies.find((film) => film.id=== Number(movieId)).description}</h1>
        </div>
    )
}

export default Trailer
