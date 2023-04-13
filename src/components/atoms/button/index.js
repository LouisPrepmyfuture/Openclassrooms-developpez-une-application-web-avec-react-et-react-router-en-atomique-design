import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {children, ...other } = props

  return (
    <button {...other}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Button