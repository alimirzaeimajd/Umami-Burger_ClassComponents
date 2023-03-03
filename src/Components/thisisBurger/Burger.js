import React from "react";
import './Burger.css';
import BurgerInnit from "./BurgerInnit/BurgerInnit";

const Burger = (props) => {
    // transforme object (ingredients (src\Containers\BurgerBuilder\BurgerBuilder.js)) to an array
    let transformedIngredients = Object.keys( props.ingredients ).map( igKey => {return [...Array( props.ingredients[igKey] )].map( ( _, i ) =>{return <BurgerInnit key={igKey + i} type={igKey} />;} );} ).reduce((arr, el) => {return arr.concat(el)}, []); if (transformedIngredients.length === 0) {transformedIngredients = <p className="text-danger">Please add something!</p>}

    return (
        <div className="Burger">
            <BurgerInnit type='bread-top' />
            {transformedIngredients}
            <BurgerInnit type='bread-bottom' />
        </div>
    );
};

export default Burger;