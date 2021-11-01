import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating';
import { Link } from "react-router-dom";

function MovieCard({movie}) {
    
    return (
        <div className="movie">
            <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={movie.posterURL} />
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text><b> Description:</b><br/>{movie.description}</Card.Text>
                    <RatingView ratingValue={movie.rating} size={14} />
                    <br/>
                    <Button onClick={(e) => e.preventDefault()}><Link to={`/trailer/${movie.id}`} className="links">Trailer</Link></Button>
                    </Card.Body>
            </Card>
        </div>                
    )
}

export default MovieCard
