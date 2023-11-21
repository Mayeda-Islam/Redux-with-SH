const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  count: 0,
};
const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});
module.exports = dynamicCounterSlice.reducer; //default export whole slice give one reducer
module.exports.dynamicCounterActions = dynamicCounterSlice.actions; //named export
