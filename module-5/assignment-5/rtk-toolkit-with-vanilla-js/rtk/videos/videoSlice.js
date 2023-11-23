const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

// Initial state
const initialState = {
  loading: false,
  video: {},
  error: "",
  videos: [],
};

// Thunk file
const fetchVideoObj = createAsyncThunk("post/fetchVideoObj", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const posts = await response.json();
  return posts;
});
const fetchVideosArray = createAsyncThunk(
  "post/fetchVideosArray",
  async (query) => {
    const response = await fetch(`http://localhost:9000/videos?${query}`);
    const posts = await response.json();
    posts.sort(function (a, b) {
      const viewsA = parseFloat(a.views);
      const viewsB = parseFloat(b.views);
      console.log(viewsA, viewsB, "sort");

      return viewsA - viewsB;
    });
    console.log(posts, "whol;w");
    return posts;
  }
);

const videoSlice = createSlice({
  name: "videoObj",
  initialState,
  reducers: {}, // You can add any additional reducers here if needed
  extraReducers: (builder) => {
    builder.addCase(fetchVideoObj.pending, (state) => {
      state.loading = true;
      state.video = {};
      state.error = "";
      state.videos = [];
    });
    builder.addCase(fetchVideoObj.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
      state.error = "";
      state.videos = [];
    });
    builder.addCase(fetchVideoObj.rejected, (state, action) => {
      state.loading = false;
      state.video = {};
      state.error = action.error.message;
      state.videos = [];
    });
    builder.addCase(fetchVideosArray.pending, (state, action) => {
      state.loading = true;
      state.video = {};
      state.error = "";
      state.videos = [];
    });
    builder.addCase(fetchVideosArray.fulfilled, (state, action) => {
      state.loading = false;
      state.video = {};
      state.error = "";
      state.videos = action.payload;
    });
    builder.addCase(fetchVideosArray.rejected, (state, action) => {
      state.loading = true;
      state.video = {};
      state.error = action.error.message;
      state.videos = [];
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideoObj = fetchVideoObj;
module.exports.fetchVideosArray = fetchVideosArray;
