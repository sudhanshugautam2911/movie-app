import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";


const API_URL = "http://www.omdbapi.com?apikey=7720404d";

const movie1 = {
  "Title": "Captain Marvel",
  "Year": "2019",
  "imdbID": "231kdd",
  "Type": "movie",
  "Poster": "N/A"
}


const App = () => {


  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  const [loader, setloader] = useState(false)

  const searchMovies = async (title) => {
    setloader(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setloader(false);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>UniversalMovies</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div>

      {
        loader === true ? (
          <Spinner />
        ) : (
          <div>
            {
              movies.length > 0
                ? (
                  <div className="container">
                    {movies.map((movie) => (
                      <MovieCard movie1={movie} />
                    ))}
                  </div>
      
                ) : (
                  <div className="empty">
                    <h2>No movies found</h2>
                  </div>
                )
            }
          </div>
        )
      }


    </div>
  );
};

export default App;
