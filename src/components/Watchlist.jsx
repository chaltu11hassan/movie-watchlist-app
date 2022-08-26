import React from "react";

import MovieCard from "./MovieCard";

import './Watchlist.css'

const Watchlist = (props) => {

    const { list, removeMovie } = props 

    const movieDisplay = list.map((movie, index)=>{
        return(
            <MovieCard key={index} movie={movie} removeMovie={removeMovie} list={list} />
        )
    })


    return(
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
                </div>
        </div>
    );
};
export default Watchlist;