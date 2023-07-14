import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./userService"

export interface State {
  user: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

// Get user from LocalStorage
// @ts-ignore
const getCustomerFromLocalStorage = localStorage.getItem("customer") || null

const initialState: State = {
  user: getCustomerFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// ** Register User
export const registerUser = createAsyncThunk(
  "auth/register-user",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.register(userData)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** Login User
export const loginUser = createAsyncThunk(
  "auth/login-user",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.login(userData)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** User Wishlist
export const getUserProductsWishlist = createAsyncThunk(
  "auth/user-wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist()
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** Add to User Cart
export const addProductToUserCart = createAsyncThunk(
  "auth/add-to-cart",
  async (cartData: any, thunkAPI) => {
    try {
      return await authService.addToCart(cartData)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** GET User Cart
export const getUserCart = createAsyncThunk(
  "auth/get-cart",
  async (thunkAPI) => {
    try {
      return await authService.getCart()
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)
// **

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.createdUser = action.payload
        state.message = "success"
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.user = action.payload
        state.message = "success"
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token)
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getUserProductsWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserProductsWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.wishlist = action.payload
        state.message = "success"
      })
      .addCase(getUserProductsWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(addProductToUserCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProductToUserCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.addedToCart = action.payload
        state.message = "success"
      })
      .addCase(addProductToUserCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.userCart = action.payload
        state.message = "success"
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export const {} = authSlice.actions

export default authSlice.reducer
