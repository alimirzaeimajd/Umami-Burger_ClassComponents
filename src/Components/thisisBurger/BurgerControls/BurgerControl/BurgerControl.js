import { render } from "@testing-library/react";
import React, { Component } from "react";
import './BurgerControl.css';

const burgerControl = (props) => (


    <div className="BuildControl" >
    <div className="Label">{props.label}</div>
        <button
            className="Less"
            onClick={props.remove}
            disabled={props.disabled} >Remove   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg></button>
        <button
            className="More"
            onClick={props.add}>Add <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg></button>
    </div>
)


export default burgerControl;