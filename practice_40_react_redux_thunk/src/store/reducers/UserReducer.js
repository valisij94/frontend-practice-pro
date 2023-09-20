/**
 *
 * @param {*} store
 * @param {*} action
 * @returns
 */

import { userActionTypes } from "../actions/userActions";

const initialAppState = {
    name: 'Vasya',
    pwd: '',
};

export const userReducer = (store = initialAppState, action) => {
    switch (action.type) {
        case userActionTypes.ADD_USER_DATA: {
            return {
                name: action.value.name,
                pwd: action.value.pwd
            }
        }
        default: return store;
    }
};