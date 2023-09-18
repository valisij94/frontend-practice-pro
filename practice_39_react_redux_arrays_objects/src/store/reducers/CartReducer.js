import { cartActionTypes } from "../actions/cartActions";

const initialCartState = {};

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART: {
            const newState = { ...state };
            if (newState[action.value.id]) {
                newState[action.value.id]++;
            }
            else {
                newState[action.value.id] = 1;
            }
            return newState;
        }
        case cartActionTypes.REMOVE_FROM_CART: {
            const newState = { ...state };
            if (newState[action.value.id]) {
                if (newState[action.value.id] > 1) {
                    newState[action.value.id]--;
                }
                else {
                    delete newState[action.value.id];
                }
            }
            return newState;
        }
        default: return state;
    }
};