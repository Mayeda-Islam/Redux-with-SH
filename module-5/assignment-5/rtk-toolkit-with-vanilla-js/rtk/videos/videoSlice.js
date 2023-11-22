const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

// Initial state
const initialState = {
  loading: false,
  video: {},
  error: "",
};

// Thunk file
const fetchVideoObj = createAsyncThunk("post/fetchVideoObj", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const posts = await response.json();
  console.log(posts, "from line 15");
  return posts;
});

const videoSlice = createSlice({
  name: "videoObj",
  initialState,
  reducers: {}, // You can add any additional reducers here if needed
  extraReducers: (builder) => {
    builder.addCase(fetchVideoObj.pending, (state) => {
      state.loading = true;
      state.video = {};
      state.error = "";
    });
    builder.addCase(fetchVideoObj.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
    });
    builder.addCase(fetchVideoObj.rejected, (state, action) => {
      state.loading = false;
      state.video = {};
      state.error = action.error.message;
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideoObj = fetchVideoObj;
