import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Trailer from './components/Trailer';
import {BrowserRouter , Route} from "react-router-dom";


function App() {
  const [movies, setMovies] = useState(
    [{
        id:1,
        title:"Squid Game",
        description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits.", 
        posterURL:"/squidGame.jpg", 
        rating:5,
        trailerURL:<iframe width="560" height="315" src="https://www.youtube.com/embed/oqxAJKy0ii4" ></iframe>
    },
    {
        id:2,
        title:"Ride Along 2",
        description:"Before Ben can marry James's sister, the two Atlanta cops must head to Miami to help the local police bring down a brutal drug dealer.",
        posterURL:"/rideAlong.jpg", 
        rating:4,
        trailerURL:<iframe width="560" height="315" src="https://www.youtube.com/embed/iWfmmwdCHTg" ></iframe>
    },
    {
        id:3,
        title:"Lucifer", 
        description:"Lucifer Morningstar, the former lord of Hell, has decided to vacation in L.A. along with his right hand demon Mazikeen.", 
        posterURL:"/lucifer.jpg", 
        rating:3,
        trailerURL:<iframe width="560" height="315" src="https://www.youtube.com/embed/X4bF_quwNtw" ></iframe>
    }]
)
  

  return (
    <BrowserRouter>
      <Route exact path="/">
         <Home movies={movies} setMovies={setMovies}/>
      </Route> 
      <Route path="/trailer/:movieId">
         <Trailer movies={movies} />

      </Route>   
       
    </BrowserRouter>
       
    
       
    
      
  );
}

export default App;
