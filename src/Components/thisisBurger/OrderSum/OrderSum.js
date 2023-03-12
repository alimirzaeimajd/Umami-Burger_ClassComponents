import React from "react";
import Aux from '../../../hoc/auxxx'

const OrderSummery = (props) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        } );

        return (
            <Aux>
                <h3>Your Burger</h3>
                <p>A attractive Burger with folowing ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>do you want continue checkout?</p>
            </Aux>
        )
}

export default OrderSummery;