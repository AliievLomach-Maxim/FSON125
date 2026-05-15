import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1) // > setCounter(0 + 1)
    setCounter(counter + 1) // > setCounter(0 + 1)
    setCounter(counter + 1) // > setCounter(0 + 1)
    // counter = 1
    // counter = 3

    setCounter((prevState) => {
      return prevState + 1
    }) // > setCounter(prevState = 0 + 1)
    setCounter((prevState) => {
      return prevState + 1
    }) // > setCounter(prevState = 1 + 1)
    setCounter((prevState) => {
      return prevState + 1
    }) // > setCounter(prevState = 2 + 1)
    // counter = 3
  }

  return (
    <div>
      <button onClick={handleClick}>{counter}</button>
    </div>
  )
}

export default Counter
