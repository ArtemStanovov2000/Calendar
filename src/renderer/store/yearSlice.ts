import { createSlice } from "@reduxjs/toolkit";
import { currentDate } from "../consts/currentDate";

const year = createSlice({
    name: "year",
    initialState: {
      year: currentDate.year
    },
    reducers: {
      setYear(state, action) {
            state.year = action.payload
        }
    }
})

export const { setYear } = year.actions
export default year.reducer
