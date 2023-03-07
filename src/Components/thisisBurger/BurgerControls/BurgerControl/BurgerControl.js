import { render } from "@testing-library/react";
import React, { Component } from "react";
import './BurgerControl.css';

const burgerControl = (props) => {

    return (
        <div className="BuildControl" >
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.remove}>Less</button>
            <button className="More" onClick={props.add}>More</button>
        </div>
    );

}

export default burgerControl;