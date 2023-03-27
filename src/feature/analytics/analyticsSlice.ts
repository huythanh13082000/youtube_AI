import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    get: (state, action: PayloadAction<{}>) => {},
  },
})

export const analyticsAction = analyticsSlice.actions

export const analyticsReducer = analyticsSlice.reducer
