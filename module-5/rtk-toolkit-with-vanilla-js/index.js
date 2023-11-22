const { fetchVideoObj } = require("./rtk/videos/videoSlice");
const store = require("./store");

store.dispatch(fetchVideoObj());
