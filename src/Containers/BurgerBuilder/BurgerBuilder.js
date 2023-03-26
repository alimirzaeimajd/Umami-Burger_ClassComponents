import React, { Component } from "react";
import Aux from "../../hoc/auxxx";
import Burger from "../../Components/thisisBurger/Burger";
import BurgerControls from "../../Components/thisisBurger/BurgerControls/BurgerControls";
import Modal from '../../UI/Modal/Modal';
import OrderSummery from "../../Components/thisisBurger/OrderSum/OrderSum";
import * as actionTypes from '../../store/action';
import { connect } from "react-redux";
const INGREDIENT_PRICES = {
    salad: 0.25,
    cheese: 0.5,
    meat: 5,
    bacon: 1
};

class BurgerBuilder extends Component {

    state = {
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    disableModalHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('you confirm to Continue!');
    }

    updatePurchasable({ ...ingredient }) {
        const sum = Object.values(ingredient).reduce((sum, val) => sum + val, 0);
        this.setState({ purchasable: sum > 0 });
    }


    addIngredientsHandler = (type) => {
        const oldCount = this.props.init[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.props.init
        };
        updatedIngredients[type] = updatedCount;
        const showPrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + showPrice;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients)
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.props.init[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.props.init
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
            ...this.props.init
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} disableModal={this.disableModalHandler}>
                    <OrderSummery
                        ingredients={this.props.init}
                        totalPrice={this.state.totalPrice}
                        continueHandler={this.purchaseContinueHandler}
                        cancelHandler={this.disableModalHandler} />
                </Modal>
                <Burger ingredients={this.props.init} />
                <BurgerControls
                    addIngredients={this.props.onIngredientAdded}
                    removeIngredients={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    totalprice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderOn={this.purchaseHandler} />
                <div>Reviews</div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        init: state.ingredients
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (initName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: initName }),
        onIngredientRemoved: (initName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: initName })
    }
}

export default connect(BurgerBuilder);