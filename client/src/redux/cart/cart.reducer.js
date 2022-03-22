import { ADD_ITEM_TO_CART, REDUCE_ITEM_FROM_CART } from "./cart.action.types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const foundItem = state.find((item) => item.id === action.payload.id);
      if (foundItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, count: 1 }];
    }

    case REDUCE_ITEM_FROM_CART: {
      const foundItem = state.find((item) => item.id === action.payload.id);
      if (foundItem.count === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count - 1 }
          : item
      );
    }
    default:
      return state;
  }
};

export default cartReducer;
