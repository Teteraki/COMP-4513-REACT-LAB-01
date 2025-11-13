export const SingleMovie = (props) => {
  return (
    <li className="column is-one-fifth-desktop is-half-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by3">
            <img
              src={"https://image.tmdb.org/t/p/w342/" + props.poster}
              alt={props.title}
            ></img>
          </figure>
        </div>
        <div className="card-content has-text-centered content-rectangle">
          <h2 className="title is-5">{props.title}</h2>
          <p className="is-size-7">{props.tagline}</p>
        </div>
        <footer className="card-footer">
          <button
            className="button card-footer-item"
            onClick={() => props.addToFavourites(props.singleMovieObject)}
          >
            <span className="icon is-small">
              <i className="fas fa-heart"></i>
            </span>
          </button>
        </footer>
      </div>
    </li>
  );
};
