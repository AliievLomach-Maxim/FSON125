import css from './style.module.css'
import imgUrl from '../../assets/app-logo.png'

const Header = () => {
  return (
    <header className={css['some-main-222']}>
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
