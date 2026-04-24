import clsx from 'clsx'
import css from './Button.module.css'

interface ButtonProps {
  text: string
  variant?: 'success' | 'error'
}

const Button = ({ text, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        css.basic,
        variant === 'success' && css.success,
        variant === 'error' && css.error,
      )}
    >
      {text}
    </button>
  )
}

export default Button
