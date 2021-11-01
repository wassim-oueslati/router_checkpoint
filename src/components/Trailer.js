import React from 'react';
import {useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";


function Trailer({movies}) {
    const { movieId } = useParams();
    return (
        <div className="trailer">
            <div>
            <Button><Link to="/Home" className="links">Home</Link></Button>
            </div>
            
            {movies.find((film) => film.id=== Number(movieId)).trailerURL}
            <h1>{movies.find((film) => film.id=== Number(movieId)).description}</h1>
        </div>
    )
}

export default Trailer
