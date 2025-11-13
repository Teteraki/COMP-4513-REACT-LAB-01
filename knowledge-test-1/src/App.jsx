import { useState } from "react";
import movieDataJSON from "./data/movie-data";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";

function App() {
  // Load movie data and have a copy of it.
  const [movieData, setMoviesData] = useState(movieDataJSON);
  //const copyOfMovieData = [...movieData]; // for literal copy of movie data array if lab wants it instead.

  // Initialize favourites as empty.
  const [favourites, setFavourites] = useState([]); //empty array

  return (
    <>
      <article className="container">
        <Header favourites={favourites} />
        <MovieList
          movies={movieData} // can pass copy of movie data instead if lab wants it.
          addToFavourites={(movie) => {
            setFavourites([...favourites, movie]),
              setMoviesData([
                ...movieData.filter((m) => m.id !== movie.id), // remove movie from copy of movie data and set movie data to the modified copy
              ]);
          }}
        />
      </article>
    </>
  );
}

export default App;
