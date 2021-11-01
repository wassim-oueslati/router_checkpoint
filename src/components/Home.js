import React,{useState} from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';


function Home({movies, setMovies}) {
    
    
      const [input, setInput] = useState('');
      const [ratingg, setRatingg] = useState(1);
    
      const add=(newMovie)=>{
        setMovies([...movies, newMovie]);
      }

    return (
        <div>
            <Filter input={input}  setInput={setInput} ratingg={ratingg} setRatingg={setRatingg} />
            <MovieList movies={movies}  input={input} ratingg={ratingg} />
            <AddMovie add={add}/>
        </div>
    )
}

export default Home
