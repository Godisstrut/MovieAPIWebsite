import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [personalScore, setPersonalScore] = useState(9)
  const [movieData, setMovieData] = useState([])
  const IncreaseRating = () => {
    setPersonalScore(prevScore => prevScore + 1)
  }

  const fetchMovie = (title) => {
    
  }
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=Star+wars`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data); //Updates movieData with movie data
      });
  }, []); //Makes the request run only ones
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieCard 
      movieImage = {movieData ? movieData.Poster : "Loading image" }
      title= { movieData ? movieData.Title : "Loading title "}
      description= {movieData ? movieData.Plot : "Loading description" }
      genre= {movieData ? movieData.Genre : "Loading genre" } 
      runtime= {movieData ? movieData.Runtime : "Loading runtime" }
      score= {movieData ? movieData.imdbRating : "Loading imdb rating" } 
      personalScore= {personalScore} />
      <button onClick={IncreaseRating}>IncreaseRating</button>
    </div>
  );
}

export default App;
