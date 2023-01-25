import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "./redux/actionType";

export default function App() {
  let { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch({
            type: INCREMENT_COUNTER,
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: DECREMENT_COUNTER,
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: RESET_COUNTER,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}
