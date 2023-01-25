// import React, {useEffect,useRef} from 'react'

// export default function App() {
//   // useRef
//   const headingRef = useRef();
//   const inputRef = useRef();

//   useEffect(()=> {
//     console.log(headingRef);
//     setTimeout(()=> {
//       headingRef.current.innerText = "Let's change this innerText"
//     },3000)
//   },[])

//   const handleInput = ()=> {
//     console.log(inputRef);
//     console.log("User Entered :",inputRef.current.value)
//   }
//   return (
//     <div>
//       <h1 ref={headingRef}>Let's try useRef</h1>
//       <input type="text" name='username' ref={inputRef} />
//       <button onClick={handleInput}>Save Me</button>
//     </div>
//   )
// }

import React, { useState } from "react";
import { format } from "date-fns";
import useTime from "./utils/useTime";
import CounterBackward from "./components/CounterBackward";
import CounterForward from "./components/CounterForward";
import UsersList from "./components/UsersList";

export default function App() {
  let time = useTime();

  return (
    <div>
      {format(time, "hh:mm:ss")}
      <br></br>
      <CounterBackward />
      <CounterForward />
      <UsersList />
    </div>
  );
}
