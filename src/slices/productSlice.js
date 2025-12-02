import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  cartProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action?.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    addToCart: (state, action) => {
      state.cartProducts = [
        ...state.cartProducts,
        { ...action?.payload?.item, qty: action.payload?.qty ?? 1 },
      ];
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state?.cartProducts?.filter(
        (prod) => prod.id == action.payload
      );
    },
  },
});
export const {
  setProductList,
  setSelectedProduct,
  clearSelectedProduct,
  addToCart,
  removeFromCart,
} = productSlice.actions;
export default productSlice.reducer;
