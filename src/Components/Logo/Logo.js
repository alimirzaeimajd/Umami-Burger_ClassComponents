import React from "react";
import BurgerLogo from "../../assets/images/download-hamburger-burger-png-image-mac-burger-png-24.png";
import './Logo.css';

const Logo = (props) => (
    <div className="Logo" >
        <img src={BurgerLogo}/>
    </div>
);

export default Logo;