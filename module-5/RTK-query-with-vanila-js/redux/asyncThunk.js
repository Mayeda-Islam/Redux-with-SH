const { default: fetch } = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
const fetchPostRequest = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostSucceeded = (posts) => {
  return {
    type: "post/succeeded",
    payload: posts,
  };
};
const fetchPostFailed = (err) => {
  return {
    type: "post/failed",
    payload: err,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
      };
    case "post/succeeded":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "post/failed":
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: action.payload,
      };
    default:
      break;
  }
};
//thunk funtion
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typico.com/posts?_limit=5"
      );
      const posts = await response.json();
      dispatch(fetchPostSucceeded(posts));
    } catch (err) {
      dispatch(fetchPostFailed(err));
    }
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
