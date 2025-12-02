import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  cancelledOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    confirmOrder: (state, action) => {
      state.orders = [...state.orders, action.payload?.item];
    },
    cancelOrder: (state, action) => {
      const order = state.orders.filter((order) => order.id == action.payload);
      state.cancelledOrders = [...state.cancelledOrders, order];
      state.orders = state.orders.filter((order) => order.id != action.payload);
    },
  },
});

export const { confirmOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
