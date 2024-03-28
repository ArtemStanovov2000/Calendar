import { configureStore } from "@reduxjs/toolkit";
import yearSlice from "./yearSlice";
import dataSlice from "./dataSlice";
import pageSlice from "./pageSlice";

export default configureStore({
    reducer: {
      year: yearSlice,
      data: dataSlice,
      page: pageSlice
    }
})
