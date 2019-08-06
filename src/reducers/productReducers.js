import { SHOW_PRODUCTS } from "../actions/types";

// Each reducer has its own state

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
