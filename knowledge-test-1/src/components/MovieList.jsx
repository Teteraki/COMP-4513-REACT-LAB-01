import { SingleMovie } from "./SingleMovie";

export const MovieList = (props) => {
  return (
    <ul className="columns is-multiline">
      {props.movies.map((m) => {
        return (
          <SingleMovie
            key={m.id}
            singleMovieObject={m}
            addToFavourites={props.addToFavourites}
          />
        );
      })}
    </ul>
  );
};
