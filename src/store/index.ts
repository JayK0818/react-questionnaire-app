import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './component'

const store = configureStore({
  reducer: {
    component: componentReducer,
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store