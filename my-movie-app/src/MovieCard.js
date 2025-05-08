import movieImage from './img/Sagan_om_ringen.jpg';
function MovieCard(props) {
    return(
        <div className="movieCard" >
            <img src={movieImage} alt="bild på film" ></img>
            <h1> Titel: {props.name} </h1>
            <p> Info om film: </p>
        </div>
    )
}

export default MovieCard