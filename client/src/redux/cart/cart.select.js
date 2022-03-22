import { createSelector } from "reselect";

const selectCartItems = (state) => state.cart;

export const selectTotalCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.count, 0)
);

export const selectTotalCartCost = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.price, 0)
);
