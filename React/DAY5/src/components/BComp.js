import React, { useState } from "react";
import CComp from "./CComp";

export default function BComp() {
  console.log("B component loaded");
  const [userB, setUserB] = useState("");
  const handleUserBChange = (e) => {
    setUserB(e);
  };
  return (
    <div>
      <h1 className="text-2xl"> Component B</h1>

      <CComp userB={userB} handleUserBChange={handleUserBChange} />
    </div>
  );
}
