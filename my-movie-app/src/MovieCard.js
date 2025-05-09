
function MovieCard(props) {
    return(
        <div className="movieCard" >
            <img src={props.movieImage} alt="bild på film" ></img>
            <h1> Title: {props.title} </h1>
            <p> Description {props.description} </p>
            <p> Genre: {props.genre} </p>
            <p> Imdb score: {props.score} </p>
            <p >Personal score: {props.personalScore} </p>
        </div>
    )
}

export default MovieCard