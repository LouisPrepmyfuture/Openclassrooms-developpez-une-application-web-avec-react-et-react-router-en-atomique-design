import * as React from 'react'
import PropTypes from 'prop-types'

const Tag = (props) => {
	const {children, key, ...other} = props

	return (
		<div key={key} {...other}>
			<span>{children}</span>
		</div>
	)
}

Tag.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Tag