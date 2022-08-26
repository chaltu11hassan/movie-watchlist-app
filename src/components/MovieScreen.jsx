import React from "react";

import MovieCard from "./MovieCard";

import './MovieScreen.css';

const MovieScreen =(props)=>{

    const {movieList, addMovie, setPage, page, list, removeMovie} = props

    const decrement =()=>{
        setPage(page - 1);
    };

    const increment =()=>{
        setPage(page + 1);
    };


    const movieDisplay = movieList.map((movie, index)=>{
        return(
            <MovieCard key={index} addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie} />
        )
    });
   
    return(
        <div className="page">
            <h1 id="text">Chaltu's Movie Theatre</h1>
            <h4 id="text">Add a movie to your watchlist!</h4>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
           {movieDisplay}
            </div>
        </div>
    )
}
export default MovieScreen;