import { useState } from 'react'

interface Item {
  title: string
  description: string
}
interface AccordionProps {
  items: Item[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  const handleClick = (newIndex: number) => {
    setActiveIndex(newIndex === activeIndex ? null : newIndex)
  }

  return (
    <div>
      {items.map((el, i) => (
        <div key={el.title}>
          <button onClick={() => handleClick(i)}>{el.title}</button>

          {activeIndex === i && <p>{el.description}</p>}

          <br />
        </div>
      ))}
    </div>
  )
}

export default Accordion
