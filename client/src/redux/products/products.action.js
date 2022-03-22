import {
  ADD_PRODUCTS,
  SET_CURRENT_PRODUCTS_CATEGORY,
} from "./products.action.type";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: ADD_PRODUCTS,
          payload: data,
        })
      );
  };
};

export const setCurrentProductsCategory = (categoryId) => {
  return {
    type: SET_CURRENT_PRODUCTS_CATEGORY,
    payload: categoryId,
  };
};
