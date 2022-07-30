import { createSlice } from "@reduxjs/toolkit";
let slice = createSlice({
  name: "slice",
  initialState: {
    bottomHeight: 75,
    keypadState: "deactive",
  },
  reducers: {
    updateBottomHeight(state, { payload }) {
      state.bottomHeight = payload;
    },
    updateKeypadState(state, { payload }) {
      state.keypadState = payload;
    },
  },
});
export let { updateBottomHeight, updateKeypadState } = slice.actions;
export let _slice = ({ slice }) => slice;
export default slice.reducer;
