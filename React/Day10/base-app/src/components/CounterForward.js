import React, { useEffect, useState } from 'react'
import useCounter from '../utils/useCounter';

export default function CounterForward() {
    let counter = useCounter("forward");
  return (
    <div>{counter}</div>
  )
}
