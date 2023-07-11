import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import blogService from "./blogService"

export interface State {
  blogs: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

const initialState: State = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// ** GET All Blogs
export const getAllBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs()
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)

// ** GET Single Blog
export const getSingleBlog = createAsyncThunk(
  "blog/get-blog",
  async (id: string, thunkAPI) => {
    try {
      return await blogService.getBlog(id)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)
// **

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.blogs = action.payload
        state.message = "success"
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.blog = action.payload
        state.message = "success"
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export const {} = blogSlice.actions

export default blogSlice.reducer
