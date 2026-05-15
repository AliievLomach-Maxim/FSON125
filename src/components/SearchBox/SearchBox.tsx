import { type ChangeEvent } from 'react'
import css from './SearchBox.module.css'
import type { DebouncedState } from 'use-debounce'
// import Modal from '../Modal/Modal'
// import useToggle from '../../hooks/useToggle'

interface SearchBoxProps {
  value: string
  onChangeSearch: DebouncedState<(newSearchValue: string) => void>
}

export default function SearchBox({ onChangeSearch, value }: SearchBoxProps) {
  // use if need some validation >>>
  // const [inputValue, setInputValue] = useState('')

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => setIsModalOpen(true)
  // const closeModal = () => setIsModalOpen(false)
  // const [isModalOpen, openModal, closeModal] = useToggle()

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    // use if need some validation >>>
    // if(e.target.value.includes('@')) return
    // setInputValue(e.target.value)

    onChangeSearch(e.target.value)
  }

  return (
    <>
      <input type='text' className={css.searchInput} defaultValue={value} onChange={handleChange} />
      {/* {isModalOpen && <Modal onClose={closeModal}>something...</Modal>} */}
    </>
    // use if need some validation >>>
    // <input type='text' className={css.searchInput} value={inputValue} onChange={handleChange} />
  )
}
