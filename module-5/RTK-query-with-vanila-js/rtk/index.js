const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { fetchPosts } = require("../rtk/features/post/postSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

// console.log(`initial state:${JSON.stringify(store.getState())}`);
// subscribe to state changes
store.subscribe(() => {
  //   console.log(store.getState());
});

// disptach actions
store.dispatch(fetchPosts());
