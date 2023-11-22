const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice");
const { createLogger, default: logger } = require("redux-logger");
const postReducer = require("../features/post/postSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
