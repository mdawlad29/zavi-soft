import { productService } from "@/services/product.service";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type ProductState = {
  isLoading: boolean;
  productItems: any[];
};

const initialState: ProductState = {
  isLoading: false,
  productItems: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productService.endpoints.getAllProducts.matchPending,
      (state, action) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher(
      productService.endpoints.getAllProducts.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        state.productItems = action.payload;
      }
    );

    builder.addMatcher(
      productService.endpoints.getAllProducts.matchRejected,
      (state, action) => {
        state.isLoading = false;
        toast.warning(action.error?.message || "Failed to load products");
      }
    );
  },
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
