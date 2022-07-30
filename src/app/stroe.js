import { configureStore } from "@reduxjs/toolkit";
import slice from "../slice";
let store = configureStore({
  reducer: {
    slice,
  },
});
export default store;
