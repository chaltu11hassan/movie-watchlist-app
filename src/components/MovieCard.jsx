import React from "react";

import './MovieCard.css'

const MovieCard = (props) => {

  const { movie, addMovie, removeMovie, list } = props;

  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="#"
        />
        <h3>{movie.original_title}</h3>
        {button}
      </div>
     
    </div>
  );
};
export default MovieCard;
