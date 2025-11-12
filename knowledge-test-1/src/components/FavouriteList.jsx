import { SingleFavourite } from "./SingleFavourite";

export const FavouriteList = (props) => {
  
    return(
        <section className="favorites">
              <h1 className="title is-4">Favorites</h1>
              <div className="columns is-multiline">
                {props.favourites.map(f => {
                  return <SingleFavourite key={f.id} poster={f.poster} title={f.title} />
                })}
                
                
              </div>
          </section>
    );
}