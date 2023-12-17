import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    userser: userReducer
  }
})

export default store
