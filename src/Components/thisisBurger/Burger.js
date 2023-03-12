import React from "react";
import './Burger.css';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
    // transforme object (ingredients (src\Containers\BurgerBuilder\BurgerBuilder.js)) to an array
    let transformedIngredients = Object.keys( props.ingredients ).map( igKey => {return [...Array( props.ingredients[igKey] )].map( ( _, i ) =>{return <BurgerIngredients key={igKey + i} type={igKey} />;} );} ).reduce((arr, el) => {return arr.concat(el)}, []); if (transformedIngredients.length === 0) {transformedIngredients = <p className="text-danger prevent-select">Please add something!</p>}

    return (
        <div className="Burger">
            <BurgerIngredients type='bread-top' />
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
};

export default Burger;