import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"
import productReducer from "../features/product/productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
