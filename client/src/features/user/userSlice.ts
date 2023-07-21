import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./userService"
import { toast } from "react-toastify"

export interface State {
  user: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

// Get user from LocalStorage
// @ts-ignore
const getCustomerFromLocalStorage = localStorage.getItem("user") || null

const initialState: State = {
  // @ts-ignore
  user: JSON.parse(getCustomerFromLocalStorage),
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
  "auth/user-cart",
  async (thunkAPI) => {
    try {
      return await authService.getCart()
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** DELETE product from Cart
export const deleteProductFromCart = createAsyncThunk(
  "auth/delete-cart-product",
  async (cartItemId: any, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(cartItemId)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** UPDATE product quantity in the Cart
export const updateProductCartQuantity = createAsyncThunk(
  "auth/update-product-quantity",
  async (cartDetails: any, thunkAPI) => {
    try {
      return await authService.updateProductQuantityFromCart(cartDetails)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** CREATE order
export const createNewOrder = createAsyncThunk(
  "auth/new-order",
  async (orderDetails: any, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetails)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** GET User Orders
export const getUserOrders = createAsyncThunk(
  "auth/get-user-orders",
  async (thunkAPI) => {
    try {
      return await authService.userOrders()
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** PUT User profile infos
export const updateUserProfile = createAsyncThunk(
  "auth/update-profile",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.updateUser(userData)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** POST Forgot-password token
export const forgotPasswordToken = createAsyncThunk(
  "auth/forgot-password-token",
  async (data: any, thunkAPI) => {
    try {
      return await authService.forgotPassToken(data)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** PUT Reset User password
export const resetUserPassword = createAsyncThunk(
  "auth/reset-password",
  async (data: any, thunkAPI) => {
    try {
      return await authService.resetPassword(data)
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
      .addCase(deleteProductFromCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.deletedCartProduct = action.payload
        state.message = "success"
        if (state.isSuccess) {
          toast.success("Product deleted from Cart successfully")
        }
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isSuccess === false) {
          toast.error("Something went wrong!")
        }
      })
      .addCase(updateProductCartQuantity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProductCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.updatedQuantity = action.payload
        state.message = "success"
      })
      .addCase(updateProductCartQuantity.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.createdOrder = action.payload
        state.message = "success"
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getUserOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.userOrders = action.payload
        state.message = "success"
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.user = action.payload
        state.message = "success"
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.passwordToken = action.payload
        state.message = "success"
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetUserPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.newPassword = action.payload
        state.message = "success"
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export const {} = authSlice.actions

export default authSlice.reducer
