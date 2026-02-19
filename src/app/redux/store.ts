import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import productReducer from "./features/product/productSlice";
import { productService } from "@/services/product.service";
import categoriesReducer from "./features/categories/categoriesSlice";
import { categoriesService } from "@/services/categories.service";

const combinedReducer: any = combineReducers({
  product: productReducer,
  categories: categoriesReducer,

  [productService.reducerPath.toString()]: productService.reducer,
  [categoriesService.reducerPath.toString()]: categoriesService.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["product", "categories"],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([productService.middleware, categoriesService.middleware]),
});

export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = typeof store.dispatch;
