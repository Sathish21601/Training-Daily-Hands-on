import React, { useReducer } from "react";
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
export default function CounterReducer() {
  const initialState = {
    count: 0,
  };

  const [countState, countDispatch] = useReducer(countReducer, initialState);
  return (
    <div className="max-w-md mx-auto  shadow-lg rounded-md flex flex-col mt-8">
      <h1 className="text-2xl text-center">{countState.count}</h1>
      <button
        className="bg-blue-500 text-white px-5 py-2"
        onClick={() => {
          countDispatch({
            type: "INCREMENT",
          });
        }}
      >
        Increment
      </button>
      <button
        className="bg-red-300 text-white px-5 py-2"
        onClick={() => {
          countDispatch({
            type: "DECREMENT",
          });
        }}
      >
        Decrement
      </button>
      <button
        className="bg-red-500 text-white px-5 py-2"
        onClick={() => {
          countDispatch({
            type: "RESET",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}
