import React from "react";
import './BurgerControls.css'
import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
];

const BurgerControls = (props) => (
    <div className="BuildControls prevent-select">
        <p className="text-light h3 "> <strong>purchasable:</strong>
        </p>
        <p className="display-4 ">{props.totalprice.toFixed(2)}$</p>
        {controls.map(ctrl => (
            <BurgerControl key={ctrl.label} label={ctrl.label} add={() => props.addIngredients(ctrl.type)} remove={() => props.removeIngredients(ctrl.type)} disabled={props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton"
            disabled={!props.purchasable}
            onClick={props.orderOn}
        >Order
        </button>
    </div>
);

export default BurgerControls;