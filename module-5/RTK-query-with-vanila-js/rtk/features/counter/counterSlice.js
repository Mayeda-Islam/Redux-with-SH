const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});
module.exports = counterSlice.reducer; //default export whole slice give one reducer
module.exports.counterActions = counterSlice.actions; //named export
