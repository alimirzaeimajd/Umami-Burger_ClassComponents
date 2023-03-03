import React from "react";
import './BurgerControls.css'
import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Chease', type: 'chease'}
];

const BurgerControls = (props) => (
    <div className="BurgerControls">
        {controls.map(ctrl => (
            <BurgerControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default BurgerControls;