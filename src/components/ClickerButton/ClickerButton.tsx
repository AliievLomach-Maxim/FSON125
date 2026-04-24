import { useState } from 'react'

interface ClickerButtonProps {
  value: number
  onChangeCounter: () => void
}

const ClickerButton = ({ value, onChangeCounter }: ClickerButtonProps) => {
  //   const [counter, setCounter] = useState(0)

  //   const handleClick = () => {
  //     setCounter(counter + 1)
  //     console.log(counter)
  //   }

  return <button onClick={onChangeCounter}>CLick me {value}</button>
}

export default ClickerButton
