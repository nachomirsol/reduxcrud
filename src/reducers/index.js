import { combineReducers } from "redux";

import { ProductReducers } from "./products";

export default combineReducers({
  products: ProductReducers
});
