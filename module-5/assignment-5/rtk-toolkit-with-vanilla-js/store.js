const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const fetchObjReducer = require("./rtk/videos/videoSlice");
const { default: logger } = require("redux-logger");

const store = configureStore({
  reducer: {
    videoObj: fetchObjReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
