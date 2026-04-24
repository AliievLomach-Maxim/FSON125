import imgUrl from '../../assets/app-logo.png'
import Button from '../Button/Button'
// import './style.css'
import css from './style.module.css'

const Header = () => {
  return (
    <header className={css.main}>
      <Button text='Click me header' />
      <Button text='Click me header' variant='success' />
      <Button text='Click me header' variant='error' />
      <img
        src='https://img.icons8.com/sf-black-filled/1200/image.jpg'
        alt='img'
        width='20'
        height='20'
      />
      <img src={imgUrl} alt='' width='20' height='20' />
      <ul>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
      </ul>
    </header>
  )
}
export default Header
