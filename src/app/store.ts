import { configureStore } from "@reduxjs/toolkit"
import { api } from "./server-api"
import NavReducers from "../components/Navbar/navbarSlice"
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    navbar: NavReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
