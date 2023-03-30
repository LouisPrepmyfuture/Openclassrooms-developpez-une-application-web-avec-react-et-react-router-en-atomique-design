import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.css'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}


const Button = (props) => {
  const {type, onClick, children, size, className } = props
  const classProps = classnames(
    styles.button,
    styles[size],
    className
  )

  return (
    <button type={type} onClick={onClick} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
	className:'Button',
	type: ButtonType.BUTTON,
	children:"Titre de la location"
}

export default Button