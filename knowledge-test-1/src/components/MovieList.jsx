import { SingleMovie } from "./SingleMovie";

export const MovieList = (props) => {
  return (
    <ul className="columns is-multiline">
      {props.movies.map((m) => {
        return (
          <SingleMovie
            key={m.id}
            poster={m.poster}
            title={m.title}
            tagline={m.tagline}
            singleMovieObject={m}
            addToFavourites={props.addToFavourites}
          />
        );
      })}
    </ul>
  );
};
