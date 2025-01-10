import clsx from 'clsx'
import styles from './button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
}
export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  ...other
}: ButtonProps) => {

  return (
    <button
      className={
        clsx(
          styles.button,
          styles[variant],
          styles[size],
          className,
        )}
      {...other}
    />
  )
}

interface ButtonCTAProps extends React.ComponentProps<'button'> {
  fullWidth: boolean
}

export const CTA = ({
  className,
  fullWidth = true,
  ...other
}: ButtonCTAProps) => {
  return (
    <button className={
      clsx(
        styles.button,
        {
          [styles['full-width']]: fullWidth,
        },
        styles.button,
        styles.primary,
        styles.xl,
        styles.cta,
        className,
      )
    } {...other} />
  )
}