import React from 'react';
import Aux from '../../../hoc/auxxx'
import Button from "../../../UI/Button/Button";
import '../Burger.css';

const OrderSummery = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <div className='prevent-select'>
            <h3>Your Burger</h3>
            <p>A attractive Burger with folowing ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: {props.totalPrice}$</strong></p>
            <p>do you want continue checkout?</p>
            <Button btnType="Success" clicked={props.continueHandler}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
            </div>
        </Aux>
    )
}

export default OrderSummery;