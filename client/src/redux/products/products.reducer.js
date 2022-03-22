import {
  ADD_PRODUCTS,
  SET_CURRENT_PRODUCTS_CATEGORY,
} from "./products.action.type";

const initialState = {
  products: [],
  currentCategory: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case SET_CURRENT_PRODUCTS_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
