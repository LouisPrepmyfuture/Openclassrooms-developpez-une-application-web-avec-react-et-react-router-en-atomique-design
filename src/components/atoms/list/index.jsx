import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
	const {children, ...other } = props

	const result = children.map(({itme}) => (
			<li key={itme} >{itme}</li>
		))
	
  return React.createElement('ul', other, result)
}

List.propTypes = {
  children: PropTypes.array.isRequired,
}

export default List