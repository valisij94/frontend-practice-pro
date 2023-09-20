import { attemptsActionTypes } from "../actions/attemptsActions";

const initialAttemptsState = [];

export const attemptsReducer = (state = initialAttemptsState, action) => {
    switch (action.type) {
        case attemptsActionTypes.ADD_ATTEMPT: {
            const newState = [ ...state ];
            newState.push( {
                login: action.value.login,
                pwd: action.value.pwd,
                id: action.value.id
            } );
            return newState;
        }
        case attemptsActionTypes.DROP_ATTEMPT: {
            return state.filter( el => el.id !== action.value );
        }
        default: return state;
    }
};