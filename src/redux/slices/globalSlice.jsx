import { createSlice } from '@reduxjs/toolkit'

const GlobalState = {
  error: null,
  loadingState: 'none',
  success: null,
}

const global = createSlice({
  name: 'global',
  initialState: GlobalState,
  reducers: {
    loadingFetching: (state) => {
      state.loadingState = 'requesting'
    },
    loadingFetched: (state, { payload }) => {
      state.loadingState = 'success'
      state.success = payload
    },
    loadingFetchingError: (state, { payload }) => {
      state.loadingState = 'failed'
      state.error = payload
    },
    clearError: (state, action) => {
      state.error = null
    },
    clearSuccess: (state, action) => {
      state.success = null
    },
  },
})

export const {
  loadingFetching,
  loadingFetched,
  loadingFetchingError,
  clearError,
  clearSuccess,
} = global.actions

export default global.reducer
