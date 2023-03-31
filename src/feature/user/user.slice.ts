import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {UserType} from '../../types/user.type'

interface UserState {
  info?: UserType
}

const initialState: UserState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getInfo: (state) => {},
    getInfoSuccess: (state, action: PayloadAction<UserType>) => {
      state.info = action.payload
    },
  },
})

export const  userAction = userSlice.actions
export const  userReducer = userSlice.reducer
export const selectUserInfo = (state:RootState)=>state.userReducer.info