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
    <div className="BuildControls">
        {controls.map(ctrl => (
            <BurgerControl key={ctrl.label} label={ctrl.label} add={() => props.addIngredients(ctrl.type)} remove={() => props.removeIngredients(ctrl.type)} />
        ))}
    </div>
);

export default BurgerControls;