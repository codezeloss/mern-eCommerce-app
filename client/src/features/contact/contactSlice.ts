import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import contactService from "./contactService"

export interface State {
  contact: any
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string | any
}

const initialState: State = {
  contact: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// ** POST Enquiry - Contact
export const createQuery = createAsyncThunk(
  "contact/post-enquiry",
  async (contactData: any, thunkAPI) => {
    try {
      return await contactService.postQuery(contactData)
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e)
    }
  },
)
// **

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        // @ts-ignore
        state.contact = action.payload
        state.message = "success"
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export const {} = contactSlice.actions

export default contactSlice.reducer
