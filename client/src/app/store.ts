import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
