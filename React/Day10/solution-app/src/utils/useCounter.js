import React, { useState, useEffect } from "react";

export default function useCounter(type) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (type === "forward") {
        setCounter((previous) => previous + 1);
      } else {
        setCounter((previous) => previous - 1);
      }
      return () => clearInterval(intervalId);
    }, 1000);
  }, []);
  return counter;
}
