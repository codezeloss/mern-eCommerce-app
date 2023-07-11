import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"
import productReducer from "../features/product/productSlice"
import blogReducer from "../features/blogs/blogSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
