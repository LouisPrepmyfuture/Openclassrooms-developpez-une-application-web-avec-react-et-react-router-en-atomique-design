import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TagStyle = styled.div`
		font-size: 14px;
    padding: 3px 20px;
    color: rgb(255, 255, 255);
    text-align: center;
    background: var(--primary);
    border-radius: 20px;
    display: initial;
		margin: 5px;
		@media (max-width: 683px) {
			font-size: 10px;
		}
`

const Tag = (props) => {
	const {children, key, ...other} = props

	return (
		<TagStyle key={key} {...other}>
			<span>{children}</span>
		</TagStyle>
	)
}

Tag.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Tag