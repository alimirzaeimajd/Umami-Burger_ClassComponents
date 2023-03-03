import React, { Component } from "react";
import Aux from "../../hoc/auxxx";
import Burger from "../../Components/thisisBurger/Burger";
import BurgerControls from "../../Components/thisisBurger/BurgerControls/BurgerControls";

class BurgerBuilder extends Component {
    // constructor (props) {

    // }

    state = {
        ingredients: {
            meat: 1,
            chease: 0,
            salad: 2,
            bacon: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls />
                <div>Reviews</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;