import { createSelector } from "reselect";

const selectProducts = (state) => state.products.products;

const selectCurrentCategory = (state) => state.products.currentCategory;

export const selectProductsOfCategory = createSelector(
  [selectProducts, selectCurrentCategory],
  (products, currentCategory) =>
    products.filter((product) => product.category === currentCategory)
);
