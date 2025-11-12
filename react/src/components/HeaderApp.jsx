import { HeaderBar } from "./HeaderBar";
import { HeaderMenu } from "./HeaderMenu";

export const HeaderApp = (props) => {
    return(
        <header className="header">
            <HeaderBar />
            <HeaderMenu />
        </header>
    );
}