import React from "react";

// const MovieCard = (props) => {          we can also do that but then we have to call props every time we use it like props.movie1.Year
const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt="movie poster" />
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;