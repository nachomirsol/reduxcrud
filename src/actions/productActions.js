import { SHOW_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "./types";
import axios from "axios";

// Here we will make the calls to comunicate the reducer
export const showProducts = () => async dispatch => {
  const response = await axios.get("http://localhost:5000/products");
  dispatch({
    type: SHOW_PRODUCTS,
    payload: response.data
  });
};

export const deleteProduct = id => async dispatch => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  });
};

export const addProduct = data => async dispatch => {
  const response = await axios.post(`http://localhost:5000/products`, data);
  dispatch({
    type: ADD_PRODUCT,
    payload: response.data
  });
};
