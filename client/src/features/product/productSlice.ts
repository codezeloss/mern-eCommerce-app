import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productService from "./productService"

export interface State {
  products: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

const initialState: State = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// ** GET All product
export const getAllProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts()
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)

export const addProductToWishList = createAsyncThunk(
  "product/wishlist",
  async (productId: any, thunkAPI) => {
    try {
      return await productService.addToWishList(productId)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

export const getSingleProduct = createAsyncThunk(
  "product/get-product",
  async (id: string, thunkAPI) => {
    try {
      return await productService.getProduct(id)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)
// **

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.products = action.payload
        state.message = "success"
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(addProductToWishList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProductToWishList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.wishedProduct = action.payload
        state.message = "success"
      })
      .addCase(addProductToWishList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.product = action.payload
        state.message = "success"
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export const {} = productSlice.actions

export default productSlice.reducer
