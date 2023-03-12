import React, { Component } from "react";
import Aux from "../../hoc/auxxx";
import Burger from "../../Components/thisisBurger/Burger";
import BurgerControls from "../../Components/thisisBurger/BurgerControls/BurgerControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 0
    }
//<div>
    // addIngredientsHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     this.setState({ ingredients: updatedIngredients })
    // }

    // removeIngredientsHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     const updatedCount = oldCount - 1;
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     this.setState({ ingredients: updatedIngredients })
    // }

    // disableHandler = () => {
    //     const disabledInfo = {
    //         ...this.state.ingredients
    //     };
    //     for (let key in disabledInfo) {
    //         disabledInfo[key] = disabledInfo[key] > 0;
    //     }
    //     console.log('why')
    //     if (this.state.ingredients <= 0) {
    //         return disabledInfo
    //     } else {
    //         return false
    //     }
    // }
//</div>

addIngredientsHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const showPrice = INGREDIENT_PRICES[type]
    const oldPrice =  this.state.totalPrice;
    const newPrice = oldPrice + showPrice;
    this.setState( { ingredients: updatedIngredients, totalPrice: newPrice } );
    
}

removeIngredientsHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0 ) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const showPrice = INGREDIENT_PRICES[type]
    const oldPrice =  this.state.totalPrice;
    const newPrice = oldPrice - showPrice;
    this.setState( { ingredients: updatedIngredients, totalPrice: newPrice } );
    
}
    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIngredients={this.addIngredientsHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    totalprice={this.state.totalPrice}/>
                <div>Reviews</div>
            </Aux>
        )
    }
}


export default BurgerBuilder;