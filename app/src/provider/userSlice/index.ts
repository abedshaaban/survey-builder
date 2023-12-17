import type { User } from '@/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      if (window.localStorage && action.payload?.token) {
        window.localStorage.setItem('cookie', action.payload?.token)
      }

      state.user = action.payload
    },

    logoutUser: (state) => {
      state.user = null
    }
  }
})

export const { setUser, logoutUser } = userSlice.actions
export default userSlice.reducer
