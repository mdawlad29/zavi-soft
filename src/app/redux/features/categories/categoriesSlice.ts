import { categoriesService } from "@/services/categories.service";
import { productService } from "@/services/product.service";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type CategoriesState = {
  isLoading: boolean;
  categoriesItems: any[];
};

const initialState: CategoriesState = {
  isLoading: false,
  categoriesItems: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategories: () => initialState,
  },
  extraReducers: (builder) => {
    // get all categories
    builder.addMatcher(
      categoriesService.endpoints.getAllCategories.matchPending,
      (state, action) => {
        state.isLoading = true;
      }
    );

    builder.addMatcher(
      categoriesService.endpoints.getAllCategories.matchFulfilled,
      (state, action) => {
        state.isLoading = false;
        state.categoriesItems = action.payload;
      }
    );

    builder.addMatcher(
      categoriesService.endpoints.getAllCategories.matchRejected,
      (state, action) => {
        state.isLoading = false;
        toast.warning(action.error?.message || "Failed to load products");
      }
    );
  },
});

export const { clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
