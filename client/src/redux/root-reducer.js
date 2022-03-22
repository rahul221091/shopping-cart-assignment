import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';
// import directoryReducer from './directory/directory.reducer';
import categoriesReducer from "./categories/categories.reducer";
import productsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";
import bannersReducer from "./banners/banners.reducer";
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  banners: bannersReducer,
});

export default rootReducer;
