import React from "react";
import '../Navigation.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <Menu handleClick={props.clickedMenu}/>
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );

}



    
        
    




export default Toolbar;