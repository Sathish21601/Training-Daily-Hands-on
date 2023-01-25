import React, { useContext } from "react";
import AppContext from "../context/AuthContext";

export default function useAuth() {
  const authContext = useContext(AppContext);

  const loginHandler = () => {
    authContext.setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    authContext.setIsLoggedIn(false);
  };

  return (
    <>
      {!authContext.isLoggedIn && (
        <button className="login" onClick={loginHandler}>
          Login
        </button>
      )}
      {authContext.isLoggedIn && (
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </>
  );
}
