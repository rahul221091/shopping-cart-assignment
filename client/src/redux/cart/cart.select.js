import { createSelector } from "reselect";

const selectCartItems = (state) => state.cart;

export const selectTotalCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.count, 0)
);
