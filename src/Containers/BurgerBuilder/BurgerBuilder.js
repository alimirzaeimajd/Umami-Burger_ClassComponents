import React, { Component } from "react";
import Aux from "../../hoc/auxxx";
import Burger from "../../Components/thisisBurger/Burger";
import BurgerControls from "../../Components/thisisBurger/BurgerControls/BurgerControls";
import Modal from '../../UI/Modal/Modal';
import OrderSummery from "../../Components/thisisBurger/OrderSum/OrderSum";

const INGREDIENT_PRICES = {
    salad: 0.25,
    cheese: 0.5,
    meat: 5,
    bacon: 1
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }
    
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    disableModalHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('you confirm to Continue!');
    }

    updatePurchasable(ingredient) {

        const sum = Object.keys(ingredient).map(igKey => { return ingredient[igKey] }).reduce((sum, el) => { return sum + el; }, 0)
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const showPrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + showPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients)
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const showPrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - showPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients)

    }
    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} disableModal={this.disableModalHandler}>
                    <OrderSummery 
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    continueHandler={this.purchaseContinueHandler}
                    cancelHandler={this.disableModalHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIngredients={this.addIngredientsHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    totalprice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderOn={this.purchaseHandler} />
                <div>Reviews</div>
            </Aux>
        )
    }
}


export default BurgerBuilder;