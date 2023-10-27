import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./counter/counterReducer";
import rootReducer from "./rootReducer";
import myLogger from "./middleware/myLogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
