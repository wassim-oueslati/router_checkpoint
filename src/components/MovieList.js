import React from 'react';
import MovieCard from './MovieCard';


function MovieList({movies,input,ratingg}) {
   
    return (
      
      <div className="listMovies">
            {movies
            .filter((el) => (el.title.toLowerCase().includes(input)) && (el.rating>=ratingg) )
            .map((movie, index) => <MovieCard movie={movie} />                 
            )}
        </div>
        
    )
}

export default MovieList;
