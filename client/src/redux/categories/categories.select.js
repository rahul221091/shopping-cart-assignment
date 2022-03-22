import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectReqCategories = createSelector(
  [selectCategories],
  (categories) =>
    categories
      .filter((category) => category.order !== -1)
      .sort((a, b) => a.order - b.order)
);
