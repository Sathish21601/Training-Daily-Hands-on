import React, { useEffect, useState } from 'react'
import useCounter from '../utils/useCounter';

export default function CounterBackward() {
    let counter = useCounter("backward");
  return (
    <div>{counter}</div>
  )
}
