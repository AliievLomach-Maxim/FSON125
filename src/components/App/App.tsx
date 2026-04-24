// Hooks > use

import { useState } from 'react'
import ClickerButton from '../ClickerButton/ClickerButton'
// import Accordion from '../Accordion/Accordion'
// // state > new value > App()
// const items = [
//   { title: 'title 1', description: 'big qwerty' },
//   { title: 'title 2', description: 'big qwerty' },
//   { title: 'title 3', description: 'big qwerty' },
//   { title: 'title 4', description: 'big qwerty' },
//   { title: 'title 5', description: 'big qwerty' },
//   { title: 'title 6', description: 'big qwerty' },
// ]

const App = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  })

  // const handleClick1 = () => {
  //   setCounters({ ...counters, counter1: counters.counter1 + 1 })
  // }
  // const handleClick2 = () => {
  //   setCounters({ ...counters, counter2: counters.counter2 + 1 })
  // }
  // const handleClick3 = () => {
  //   setCounters({ ...counters, counter3: counters.counter3 + 1 })
  // }
  const handleClick = (key: 'counter1' | 'counter2' | 'counter3') => {
    setCounters({ ...counters, [key]: counters[key] + 1 })
  }

  const total = counters.counter1 + counters.counter2 + counters.counter3

  return (
    <div>
      <ClickerButton onChangeCounter={() => handleClick('counter1')} value={counters.counter1} />
      <ClickerButton onChangeCounter={() => handleClick('counter2')} value={counters.counter2} />
      <ClickerButton onChangeCounter={() => handleClick('counter3')} value={counters.counter3} />
      <hr />
      <h1>{total}</h1>
      {/* <button onClick={handleClick}>CLick me {counter}</button>
      <button onClick={handleClick}>CLick me {counter}</button>
      <button onClick={handleClick}>CLick me {counter}</button>
      <button onClick={handleClick}>CLick me {counter}</button>
      <button onClick={handleClick}>CLick me {counter}</button> */}
      <hr />
      {/* <Accordion items={items} /> */}
    </div>
  )
}

export default App

// const button = document.getElementById('button')
// const handleClick = ()=>{}
// button.addEveLi('click',handleClick)
// button.addEveLi('click',()=>{})
// const App = () => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(event)
//   }
//   const handleClick2 = (value: number) => {
//     console.log(value)
//   }

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   return e.target.value
//   // }
//   return (
//     <div>
//       {/* <button onClick={() => handleClick(10)}>click 5</button> */}
//       <button onClick={handleClick}>click 5</button>
//       <button
//         onClick={(event) => {
//           console.log(event)
//           handleClick2(10)
//           handleClick2(10)
//           handleClick2(10)
//           handleClick2(10)
//           handleClick2(10)
//           handleClick2(10)
//           console.log(2 + 2)
//         }}
//       >
//         click 5
//       </button>
//       <button onClick={handleClick}>click 5</button>
//       <button onClick={() => handleClick2(10)}>click 5</button>
//       {/* <input type='text' onChange={handleChange} /> */}
//     </div>
//   )
// }

// export default App

// // const button = document.getElementById('button')
// // const handleClick = ()=>{}
// // button.addEveLi('click',handleClick)
// // button.addEveLi('click',()=>{})
