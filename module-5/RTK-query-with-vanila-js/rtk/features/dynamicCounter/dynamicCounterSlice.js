const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");
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
  extraReducers: (builder) => {
    builder.addCase(counterActions.increment, (state, action) => {
      state.count = state.count + 1;
    });
  },
});
module.exports = dynamicCounterSlice.reducer; //default export whole slice give one reducer
module.exports.dynamicCounterActions = dynamicCounterSlice.actions; //named export
