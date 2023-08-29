import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  isNavbarOpen: true,
}
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen
    },
    closeNavbar: (state) => {
      state.isNavbarOpen = false
    },
  },
})

export default navbarSlice.reducer
export const { toggleNavbar, closeNavbar } = navbarSlice.actions
