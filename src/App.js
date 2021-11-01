import React,{useState} from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import './App.css';
import Trailer from './components/Trailer';
import { BrowserRouter , Route } from "react-router-dom";
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState(
    [{
        id:1,
        title:"Squid Game",
        description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits.", 
        posterURL:"/squidGame.jpg", 
        rating:5,
        trailerURL:"https://www.youtube.com/embed/oqxAJKy0ii4"
    },
    {
        id:2,
        title:"Ride Along 2",
        description:"Before Ben can marry James's sister, the two Atlanta cops must head to Miami to help the local police bring down a brutal drug dealer.",
        posterURL:"/rideAlong.jpg", 
        rating:4,
        trailerURL: "https://www.youtube.com/embed/iWfmmwdCHTg"
    },
    {
        id:3,
        title:"Lucifer", 
        description:"To save their beach, elite lifeguard Mitch Buchannon and a former Olympian probe a criminal plot that threatens the future of the bay.", 
        posterURL:"/lucifer.jpg", 
        rating:3,
        trailerURL: "https://www.youtube.com/embed/X4bF_quwNtw"
    }]
)

  const [input, setInput] = useState('');
  const [ratingg, setRatingg] = useState(1);

  const add=(newMovie)=>{
    setMovies([...movies, newMovie]);
  }

  return (
       
    < BrowserRouter>
    <Route path="/">
    <Filter input={input}  setInput={setInput} ratingg={ratingg}setRatingg={setRatingg} />
      <MovieList movies={movies}  input={input} ratingg={ratingg} />
      <AddMovie add={add}/>
    </Route>
      
      <Route path="/trailer/:movieId"><Trailer movies={movies} /></Route>
    </BrowserRouter>
      
  );
}

export default App;
