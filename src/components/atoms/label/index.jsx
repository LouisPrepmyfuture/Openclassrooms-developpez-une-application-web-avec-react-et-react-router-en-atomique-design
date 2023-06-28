import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelStyle = styled.label`
	padding: 5px 0px;
	display: inline-block;
`

const Label = (props) => {
	const { children, ...other } = props
	return (
		<LabelStyle {...other} >
			{children}
		</LabelStyle>
	)
}

Label.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Label