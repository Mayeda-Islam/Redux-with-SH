import { DECREMENT, INCREMENT } from "./actionType";

const initalState = {
  value: 20,
};
export const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
