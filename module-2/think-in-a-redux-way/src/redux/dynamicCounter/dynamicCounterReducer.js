import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initalState = {
  value: 0,
};
export const dynamicCounterReducer = (state = initalState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
