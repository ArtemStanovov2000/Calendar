import { createSlice } from "@reduxjs/toolkit";

const page = createSlice({
    name: "page",
    initialState: {
      page: "calendar"
    },
    reducers: {
      setPage(state, action) {
            state.page = action.payload
        }
    }
})

export const { setPage } = page.actions
export default page.reducer
