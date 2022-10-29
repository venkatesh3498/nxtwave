import { configureStore } from '@reduxjs/toolkit'
import ResourceReducer from './redux/ResourceSlice'
const store = configureStore({
  reducer: {
    resources: ResourceReducer
  },
})

export default store