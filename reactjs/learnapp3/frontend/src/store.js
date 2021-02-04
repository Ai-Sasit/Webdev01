import {productListReducer, productDetailReducer} from './reducer/product.js';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";

const initialState = {};
const reducers = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;