import { useLocalStorage } from 'usehooks-ts'

const App = () => {
  const [counter, setCounter] = useLocalStorage('counter', 0)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default App

// import { useEffect, useState } from 'react'

// const getInitialValue = () => {
//   const localValue = localStorage.getItem('counter')
//   if (localValue !== null) {
//     return JSON.parse(localValue)
//   } else {
//     return 0
//   }
// }

// const App = () => {
//   // const [counter, setCounter] = useState(0)
//   const [counter, setCounter] = useState(getInitialValue)

//   useEffect(() => {
//     localStorage.setItem('counter', JSON.stringify(counter))
//   }, [counter])

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//     </div>
//   )
// }

// export default App
// import { useState } from 'react'
// import Sidebar from '../Sidebar/Sidebar'

// const App = () => {
//   const [isShowSidebar, setIsShowSidebar] = useState(false)

//   const hideSideBar = () => {
//     setIsShowSidebar(false)
//   }

//   return (
//     <div>
//       <button onClick={() => setIsShowSidebar(true)}>Show</button>
//       {isShowSidebar && <Sidebar onClose={hideSideBar} />}
//       <footer></footer>
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'
// import Timer from '../Timer/Timer'

// const App = () => {
//   const [isShowTimer, setIsShowTimer] = useState(false)
//   console.log('first')
//   return (
//     <div>
//       <button onClick={() => setIsShowTimer(!isShowTimer)}>{isShowTimer ? 'Hide' : 'Show'}</button>
//       {isShowTimer && <Timer />}
//     </div>
//   )
// }

// export default App
// import axios from 'axios'
// import { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState(null)
//   const [counter, setCounter] = useState(0)
//   const [counter2, setCounter2] = useState(0)

//   useEffect(() => {
//     // axios.get('https://swapi.info/api/people/1').then((res) => setData(res.data))
//     const fetching = async () => {
//       const res = await axios.get('https://swapi.info/api/people/1')
//       console.log(res)
//       setData(res.data)
//     }
//     fetching()
//   }, [])

//   // axios.get('https://swapi.info/api/people/1').then((res) => setData(res.data))

//   return (
//     <div>
//       {JSON.stringify(data)}
//       <hr />
//       <button onClick={() => setCounter(counter + 1)}>click {counter}</button>
//       <button onClick={() => setCounter2(counter2 + 1)}>click {counter2}</button>
//     </div>
//   )
// }

// export default App
