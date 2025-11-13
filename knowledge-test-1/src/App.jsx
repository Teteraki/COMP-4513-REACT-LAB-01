import { useState } from "react";
import movieDataJSON from "./data/movie-data";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";

function App() {
  // Load movie data and have a copy of it.
  const [movieData, setMoviesData] = useState(movieDataJSON);
  const copyOfMovieData = movieData;

  // Initialize favourites as empty.
  const [favourites, setFavourites] = useState([
    {
      id: 128,
      title: "Past Lives",
      tagline: "Love and Destiny",
      poster: "/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
      runtime: 106,
      tmdbID: 666277,
    },
    {
      id: 180,
      title: "Oppenheimer",
      tagline: "Now I am Become Death, the Destroyer of Worlds",
      poster: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      runtime: 180,
      tmdbID: 872585,
    },
    {
      id: 229,
      title: "Killers of the Flower Moon ",
      tagline:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one — until the FBI steps in to unravel the mystery",
      poster: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      runtime: 206,
      tmdbID: 466420,
    },
    {
      id: 2,
      title: "La Dolce Vita",
      tagline: "The world's most talked about movie today",
      poster: "/11hMHhThUb53fHoDDyn5LUsw0Z.jpg",
      runtime: 174,
      tmdbID: 439,
    },
  ]); //empty array

  // Update the favourites array.
  const addToFavourites = (movie) => {
    alert("in process of fav'ing!");
    setFavourites([...favourites, movie]);
  };

  return (
    <>
      <article className="container">
        <Header favourites={favourites} />
        <MovieList movies={copyOfMovieData} addToFavourites={addToFavourites} />
      </article>
    </>
  );
}

export default App;
