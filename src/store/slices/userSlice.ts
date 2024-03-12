import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

interface State {
  user: User
}

const initialState: State = {
  user: JSON.parse(localStorage.getItem('userData')) || null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logOut: (state) => {
      state.user = null
    }
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer
