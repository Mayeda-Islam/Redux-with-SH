import rootReducer from "../rootReducer";

//create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action ${JSON.stringify(action)}`);
  console.log(`before of action ${JSON.stringify(store.getState())}`);
  const upcomigStore = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming ${JSON.stringify(upcomigStore)}`);
  console.log(`After of action ${JSON.stringify(store.getState())}`);
  next(action);
};
export default myLogger;
