import * as React from 'react'
import PropTypes from 'prop-types'

const Label = (props) => {
	const {children, ...other} = props
	return (
		<label {...other} >
			{children}
		</label>
	)
}

Label.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Label