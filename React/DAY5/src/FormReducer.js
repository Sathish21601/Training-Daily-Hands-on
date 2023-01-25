import React, { useEffect, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case "EMAIL_VALIDATe":
      return {
        ...state,
        isEmailValid: action.data,
      };
    default:
      return state;
  }
};
export default function FormReducer() {
  const formInitialState = {
    userName: "",
    email: "",
    password: "",
    isEmailValid: true,
  };
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    formDispatch({
      type: "INPUT_CHANGE",
      fieldName: e.target.name,
      fieldValue: e.target.value,
    });
  };
  const handleEmailBlur = (e) => {
    console.log(e.target.value);
    formDispatch({
      type: "EMAIL_VALIDATe",
      data: validateEmail(e.target.value),
    });
  };

  const validateEmail = (e) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="max-w-md mx-auto shadow-md py-12 px-6 rounded-md mt-4">
      <form>
        <section className="flex gap-4">
          <label className="mr-2">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={handleInputChange}
            className="border border-gray-300 h-8 rounded-md flex-grow focus:border-blue-400"
          />
        </section>
        <section className="flex gap-4">
          <label className="mr-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            className="border border-gray-300 h-8 rounded-md flex-grow focus:border-blue-400"
          />
          {!formState.isEmailValid && (
            <span className="text-sm text-red-500">Email is Incorrect</span>
          )}
        </section>
        <section>
          <label className="mr-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            className="border border-gray-300 h-8 rounded-md flex-grow focus:border-blue-400"
          />
        </section>
        <section className="text-center">
          <button
            type="submit"
            className=" bg-blue-500 mt-5 px-5 py-2 text-white"
          >
            Submit
          </button>
        </section>
      </form>
    </div>
  );
}
