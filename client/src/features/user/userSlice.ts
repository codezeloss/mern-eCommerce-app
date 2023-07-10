import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./userService"

export interface State {
  user: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

const initialState: State = {
  user: "",
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
  },
})

export const {} = authSlice.actions

export default authSlice.reducer
