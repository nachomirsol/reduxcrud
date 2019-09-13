import {
  SHOW_PRODUCTS,
  SHOW_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT
} from "../../constants/products";
import axios from "axios";

// Here we will make the calls to comunicate the reducer
const baseUrl = "http://localhost:5000/products";

export const showProducts = () => async dispatch => {
  const response = await axios.get(`${baseUrl}`);
  dispatch({
    type: SHOW_PRODUCTS,
    payload: response.data
  });
};

export const showProduct = id => async dispatch => {
  const response = await axios.get(`${baseUrl}/${id}`);
  dispatch({
    type: SHOW_PRODUCT,
    payload: response.data
  });
};

export const deleteProduct = id => async dispatch => {
  await axios.delete(`${baseUrl}/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  });
};

export const addProduct = data => async dispatch => {
  const response = await axios.post(`${baseUrl}`, data);

  dispatch({
    type: ADD_PRODUCT,
    payload: response.data
  });
};

export const editProduct = product => async dispatch => {
  const response = await axios.put(`${baseUrl}/${product.id}`, product);
  dispatch({
    type: EDIT_PRODUCT,
    payload: response.data
  });
};
