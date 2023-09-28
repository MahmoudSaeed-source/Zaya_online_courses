import { configureStore } from '@reduxjs/toolkit'
import Featured_productsReducer from '../features/feature'

const store = configureStore({
  reducer: {
    Featured: Featured_productsReducer
  },
})
export default store;