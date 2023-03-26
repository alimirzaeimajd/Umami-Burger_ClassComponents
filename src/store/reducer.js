import * as actionTypes from './action';

const intialState = {
    ingredients: {
        meat: 0,
        salad: 0,
        bacon: 0,
        cheese: 0
    },
    totalPrice: 0
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default:
            return state;
    }
}

export default reducer;