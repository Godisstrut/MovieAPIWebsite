import './App.css';
import Header from './Header';
import MovieCard from './MovieCard';
import lotrImage from "./img/Sagan_om_ringen.jpg"
import { useState, useEffect } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [personalScore, setPersonalScore] = useState(9)
  const [movieData, setMovieData] = useState()
  const IncreaseRating = () => {
    setPersonalScore(prevScore => prevScore + 1)
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=The+Lord+of+the+Rings&y=2001`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      });
  }, []); //Makes the request run only ones
  return (
    <div className="App">
      <Header />
      <MovieCard 
      movieImage = {lotrImage}
      title= { movieData ? movieData.Title : "Loading title "}
      description= {movieData ? movieData.Plot : "Loading description" }
      genre= {movieData ? movieData.Genre : "Loading genre" } score="8.9" personalScore= {personalScore} />
      <button onClick={IncreaseRating}>IncreaseRating</button>
    </div>
  );
}

export default App;
