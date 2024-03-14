import { useEffect, useState } from "react"
import { Counterdisplay } from "./Counterdisplay"

export function Counter({ initialValue = 0}) {
   const [ counter, setCounter ] = useState(initialValue)
   
   const handleCounterIncrement = () => {
        setCounter((c) => c + 1)
   }

   const handleCounterDecrement = () => {
    setCounter(counter === initialValue ? initialValue : (c) => c - 1)
   }

   const handleCounterReset = () => {
    setCounter(initialValue)
   }

    return (
        <>
            <Counterdisplay counter={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </>
    )
}