import {combineReducers, createStore} from 'redux';
import { userReducer } from './reducers/UserReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/CartReducer';

/**
 * state = {
 *  userData: { // User Data }
 *  cartData: { // Cart Data }
 * }
 */

export const store = createStore( combineReducers( {
    userData: userReducer,
    cartData: cartReducer
}), composeWithDevTools() );