import React, { useReducer, useState } from "react";
import AppContext from "./AppContext";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.fieldName]: action.fieldvalue,
      };
    case "HANDLE_EXPENSE_LIST_UPDATE":
      return {
        ...state,
        expenseList: action.data,
      };
    case "HANDLE_TOTAL":
      return {
        ...state,
        total: action.data,
      };
    default:
      return state;
  }
};
export default function AppState(props) {
  const initalState = {
    expense: "",
    expenseList: [],
    total: 0,
    id: "",
    title: "",
    catagory: "",
    amount: "",
  };

  const [expenseState, expenseDispatch] = useReducer(
    expenseReducer,
    initalState
  );
  let [user, setUser] = useState({
    userName: "John",
    email: "John@gmail.com",
  });

  const logClick = () => {
    console.log("Somethig was clicked");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        logClick,
        expenseReducer,
        expenseState,
        expenseDispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
