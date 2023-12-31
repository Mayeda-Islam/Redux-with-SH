const { fetchVideosArray, fetchVideoObj } = require("./rtk/videos/videoSlice");
const store = require("./store");
const tags = store.getState();

const fetchMoreVideos = () => {
  const tags = store.getState().videoObj.video?.tags;
  let query = "";
  tags &&
    tags?.forEach((element, index) => {
      if (tags.length - 1 === index) {
        query = query + `tags_like=${element}`;
      } else {
        query = query + `tags_like=${element}&`;
      }
    });
  tags && store.dispatch(fetchVideosArray(query));
};

store.subscribe(() => {
  const videoInfo = store.getState().videoObj?.loading;
  if (!videoInfo) {
    fetchMoreVideos();
  }
});
store.dispatch(fetchVideoObj());
