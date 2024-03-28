import { createSlice } from "@reduxjs/toolkit";
import { initialDateState } from "../consts/initialDateState";

const data = createSlice({
    name: "data",
    initialState: {
      data: initialDateState
    },
    reducers: {
      setBudget(state, action) {
        for (let i = 0; i < state.data.length; i++) {
          if(state.data[i].year === action.payload.date.year) {
            state.data[i].monthList[action.payload.date.month].finance.income = action.payload.income
            state.data[i].monthList[action.payload.date.month].finance.expenses = action.payload.expenses
          }
        }
      },
      setState(state, action) {
        state.data = action.payload
      }
    }
})

export const { setBudget, setState } = data.actions
export default data.reducer
