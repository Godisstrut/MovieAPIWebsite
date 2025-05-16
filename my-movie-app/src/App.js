import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Overlay from './components/Overlay';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [personalScore, setPersonalScore] = useState(9);
  const [movieData, setMovieData] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  
  // Function for retrieving movie data based on title
  const fetchMovie = async (title) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
      const data = await response.json();
      if (data.Response === 'True') {
        console.log(data);
        return data;
      } else {
        console.error(`Error, couldnt find movie ${title}`);
        return null;
      }
    } catch (error) {
      console.error('Error getting movie data', error);
      return null;
    }
  };
  useEffect(() => {
    const movieTitles = ['Star Wars', 'Moneyball', 'Inception', 'Fight club']; //Movies currently being displayed

    const fetchAllMovies = async () => {
      const movies = await Promise.all(
        movieTitles.map(title => fetchMovie(title))
      );
      // Filters away movies that couldnt be found
      setMovieData(movies.filter(movie => movie));
    };

    fetchAllMovies();
  }, [apiKey]); // Adds APIkey as dependency for useEffect

  return (
    <div className="App">
      <Header />
      <SearchBar movieSearch={movieSearch} />
      {movieData.length > 0 ? (
        movieData.map((movie, index) => (
          <MovieCard
            key={index} // Unique key identifier
            movieImage={movie.Poster}
            title={movie.Title}
            description={movie.Plot}
            genre={movie.Genre}
            runtime={movie.Runtime}
            score={movie.imdbRating}
            personalScore={personalScore}
          />
        ))
      ) : (
        <p>Laddar filmer...</p>
      )}
    </div>
  );
}

export default App;