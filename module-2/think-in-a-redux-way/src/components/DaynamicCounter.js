import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/dynamicCounter/action";
function DynamicHooksCounter({ id }) {
  const count = useSelector((state) => state.dynamicCounter.value);
  console.log(count);
  const dispatch = useDispatch();
  const handleIncrement = (value) => {
    dispatch(increment(value));
  };
  const handleDecrement = (value) => {
    dispatch(decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => handleIncrement(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => handleDecrement(5)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default DynamicHooksCounter;
