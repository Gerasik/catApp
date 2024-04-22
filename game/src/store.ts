import { configureStore } from "@reduxjs/toolkit"
import boosterSlice from "feature/booster/boosterSlice"

export const store = configureStore({
  reducer: { boosters: boosterSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
