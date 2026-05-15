import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'
import TaskForm from '../TaskForm/TaskForm'
import { getTasks } from '../../services/taskService'
import css from './App.module.css'
import SearchBox from '../SearchBox/SearchBox'
import { useDebouncedCallback } from 'use-debounce'
import useToggle from '../../hooks/useToggle'

// const useToggle = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const open = () => setIsOpen(true)
//   const close = () => setIsOpen(false)
//   return [isOpen, open, close]
// }

export default function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => setIsModalOpen(true)
  // const closeModal = () => setIsModalOpen(false)
  //
  const [isModalOpen, openModal, closeModal] = useToggle()
  //
  const [searchQuery, setSearchQuery] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['tasks', searchQuery],
    queryFn: () => getTasks(searchQuery),
  })

  const onChangeSearch = useDebouncedCallback((newSearchValue: string) => {
    setSearchQuery(newSearchValue)
  }, 300)

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox onChangeSearch={onChangeSearch} value={searchQuery} />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onClose={closeModal} />
        </Modal>
      )}
      {isModalOpen && <Modal onClose={closeModal}>qwrety</Modal>}
    </div>
  )
}

// import { useQuery } from '@tanstack/react-query'
// import { useState, type ChangeEvent } from 'react'
// import { useDebouncedCallback } from 'use-debounce'

// const App = () => {
//   const [inputValue, setInputValue] = useState('123')

//   const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
//     // console.log(e.target.value)

//     // if (e.target.value.includes('!')) return
//     setInputValue(e.target.value)
//   }
//   /**
//   // const handleChange = useDebouncedCallback(
//   //   // function
//   //   (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
//   //     // console.log(e.target.value)

//   //     // if (e.target.value.includes('!')) return
//   //     setInputValue(e.target.value)
//   //   },
//   //   // delay in ms
//   //   1000,
//   // )

//   // c > event
//   // if delay >= 1000 ms > function() else return
//   // ca > event
//   // if delay >= 1000 ms > function() else return
//   // cat > event
//   // if delay >= 1000 ms > function() else return

//   // useQuery({
//   //   queryKey: ['test', inputValue],
//   //   queryFn: () => {
//   //     console.log('useQuery inputValue', inputValue)
//   //   },
//   // })
//    */

//   return (
//     <div>
//       {/* <input type='text' onChange={handleChange} defaultValue={inputValue} /> */}
//       <input type='text' value={inputValue} />
//     </div>
//   )
// }

// export default App
