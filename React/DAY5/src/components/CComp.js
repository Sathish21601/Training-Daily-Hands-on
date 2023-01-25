import React, { useContext } from "react";
import AppContext from "../context/AppContext";

export default function CComp(props) {
  const contextData = useContext(AppContext);
  console.log("C component loaded");

  const onBtnClick = () => {
    props.handleUserBChange("User B changed from C");
  };

  return (
    <div>
      <h1 className="text-2xl"> Component C</h1>
      User Name : {contextData.user.userName}
      <br />
      User Email : {contextData.user.email}
      <br />
      User of B : {props.userB}
      <button
        onClick={onBtnClick}
        className="border bg-blue-500 text-white px-5 py-2 "
      >
        {" "}
        Change the User B
      </button>
    </div>
  );
}
