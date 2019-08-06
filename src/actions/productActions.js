import { SHOW_PRODUCTS } from "./types";
import axios from "axios";

// Here we will make the calls to comunicate the reducer
export const showProducts = () => async dispatch => {
  const response = await axios.get("http://localhost:5000/products");
  dispatch({
    type: SHOW_PRODUCTS,
    payload: response.data
  });
};
