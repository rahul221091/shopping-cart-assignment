import { ADD_ITEM_TO_CART, REDUCE_ITEM_FROM_CART } from "./cart.action.types";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItemToCart = (item) => {
  return {
    type: REDUCE_ITEM_FROM_CART,
    payload: item,
  };
};
