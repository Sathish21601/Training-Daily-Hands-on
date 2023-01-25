import React, { useReducer } from "react";
const emailReducer = (state, action) => {
  if (action.type === "CHANGE_EMAIL") {
    return {
      value: action.data,
      isValid: null,
    };
  }

  if (action.type === "UPDATE_EMAIL") {
    return {
      value: action.data,
      isValid: null,
    };
  }
  return {
    value: "",
    isValid: null,
  };
};
export default function Reducer() {
  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: "test@yahoo.com",
    isValid: null,
  });
  return (
    <div className="max-w-md mx-auto">
      {emailState.value}
      <div className="mt-5">
        <button
          className="border bg-blue-500 text-white p-2"
          onClick={() => {
            emailDispatch({
              type: "CHANGE_EMAIL",
              data: "Change@gmail.com",
            });
          }}
        >
          Change Email
        </button>
      </div>
      <div className="mt-2">
        <button
          className="border bg-blue-500 text-white p-2"
          onClick={() => {
            emailDispatch({
              type: "UPDATE_EMAIL",
              data: "Update@gmail.com",
            });
          }}
        >
          Change to Another Email
        </button>
      </div>
    </div>
  );
}
