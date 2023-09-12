import {createStore} from 'redux';
import { userActionTypes } from './actions/userActions';

const initialAppState = {
    name: 'Vasya',
    pwd: '',
};

/*
 action = {
    type: 'addUserData',
    value: {
        name: 'Vasilij',
        pwd: 'TopSikret!'
    }
 }
*/
/**
 *
 * @param {*} store
 * @param {*} action
 * @returns
 */
const userReducer = (store = initialAppState, action) => {
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

export const store = createStore(userReducer);