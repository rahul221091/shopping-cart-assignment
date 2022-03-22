import { ADD_CATEGORIES } from "./categories.action.types";

export const fetchCategories = () => {
  return (dispatch) => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: ADD_CATEGORIES,
          payload: data,
        })
      );
  };
};
