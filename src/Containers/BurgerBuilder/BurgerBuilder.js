import React, { Component } from "react";
import Aux from "../../hoc/auxxx";
import Burger from "../../Components/thisisBurger/Burger";
import BurgerControls from "../../Components/thisisBurger/BurgerControls/BurgerControls";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 1,
            chease: 0,
            salad: 2,
            bacon: 0
        },
        totalPrice: 20
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients })
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients })
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls addIngredients={this.addIngredientsHandler} removeIngredients={this.removeIngredientsHandler} />
                <div>Reviews</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;