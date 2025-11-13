export const SingleFavourite = (props) => {
  return (
    <div className="column is-1">
      <img
        src={"https://image.tmdb.org/t/p/w92/" + props.poster}
        alt={props.title}
      ></img>
    </div>
  );
};
