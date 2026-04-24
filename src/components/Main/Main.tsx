// import './style.css'
import css from './style.module.css'
import CatsCard from '../CatsCard/CatsCard'

import data from '../../cats.json'
import clsx from 'clsx'
import Button from '../Button/Button'

const Main = () => {
  // const arr = data.map((el) => (
  //   <CatsCard name={el.name} age={el.age} email={el.email} image={el.image} />
  // ))
  const status = false
  // const classes = clsx(
  //   '1',
  //   '2',
  //   ['3', '4'],
  //   { 5: true, 6: false },
  //   status && '7',
  //   status ? '8' : '9',
  // )

  return (
    <>
      <Button text='Click me' />
      <section className={css.main}>
        {/* {status === 'online' ? <h2>Something 1</h2> : <h2>Something 2</h2>} */}
        {status && <h2>Something 1</h2>}
        {false}
        {null}
        {undefined}

        {data.map((el) => (
          <CatsCard key={el.id} name={el.name} age={el.age} email={el.email} image={el.image} />
        ))}
        {/* <CatsCard
          name={data[0].name}
          age={data[0].age}
          email={data[0].email}
          image={data[0].image}
        />
        <CatsCard
          name={data[1].name}
          age={data[1].age}
          email={data[1].email}
          image={data[1].image}
        /> */}
        {/* <CatsCard name={data[0].name} age={cat1.age} email={cat1.email} image={cat1.image} />
        <CatsCard name={cat2.name} age={cat2.age} email={cat2.email} image={cat2.image} /> */}
        {/* <div>
          <h3>{cat1.name}</h3>
          <br />
          <p>{cat1.age}</p>
          <p>{cat1.email}</p>
          <img src={cat1.image} alt={cat1.name} width={50} height={50} />
        </div>
        <div>
          <h3>{cat2.name}</h3>
          <br />
          <p>{cat2.age}</p>
          <p>{cat2.email}</p>
          <img src={cat2.image} alt={cat2.name} width={50} height={50} />
        </div> */}
      </section>
    </>
  )
}
export default Main

// const first = (props) => {
//   return 10 + age
//  }

//  first({age:10,name:"Alex"})

// const first = (second) => {
//  return false?'asd':12
//  }
