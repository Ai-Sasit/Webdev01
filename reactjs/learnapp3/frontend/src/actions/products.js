import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE,
    PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAILURE} from '../actionType.js';
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: err.message });
    }
};

const DetailProduct = (pid) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST});
        const {data} = await axios.get(`/api/product/${pid}`);
        dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data});
    } catch (err) {
        dispatch({ type: PRODUCT_DETAIL_FAILURE, payload: err.message });
    }
};

export {listProducts, DetailProduct}