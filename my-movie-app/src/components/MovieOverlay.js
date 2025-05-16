//Component that displays info about a movie
function MovieOverlay(props) {
    return(
        <div className="movie-overlay">
            <img src={props.movieImage} alt="bild på film" ></img>
            <h2> Title: {props.title} </h2>
            <p> Description: {props.description} </p>
            <p> Genre: {props.genre} </p>
            <p> Runtime: {props.runtime} </p>
            <p> Imdb score: {props.score} </p>
            <p >Personal score: {props.personalScore} </p>
        </div>
    )
}

export default MovieOverlay;