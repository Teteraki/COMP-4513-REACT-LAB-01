import {FavouriteList} from "./FavouriteList"

export const Header = (props) => {
    return(
        <FavouriteList favourites={props.favourites}/>
    );
}