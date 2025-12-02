import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import sessionReducer from "../slices/sessionSlice";
import productRedeucer from "../slices/productSlice";
import orderReducer from "../slices/orderSlice";

const store = configureStore({
  reducer: {
    userDetails: userReducer,
    session: sessionReducer,
    products: productRedeucer,
    orders: orderReducer,
  },
});

export default store;
