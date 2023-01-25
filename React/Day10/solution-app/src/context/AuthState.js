import React, { useReducer, useState } from "react";
import AuthContext from "./AuthContext";
export default function AppState(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let passingValue = { isLoggedIn, setIsLoggedIn };

  return (
    <AuthContext.Provider value={passingValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
