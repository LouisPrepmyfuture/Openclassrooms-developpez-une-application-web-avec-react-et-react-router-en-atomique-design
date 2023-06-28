import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const handleTheme = theme => {
	switch (theme) {
		case "round":
			return `background: transparent;
			&:hover{color:var(--primary)}`
		default:
			return `background: var(--primary);`
	}
};

const ButtonStyle = styled.button
	` 
	${({ theme }) => handleTheme(theme)};
	color:white;
	border:none;
	font-size:18px;
	border-radius:10px;
	&:hover{ }
`


const Button = (props) => {
	const { children, theme, onClick, ...other } = props

	return (
		<ButtonStyle onClick={onClick} theme={theme} {...other}>
			{children}
		</ButtonStyle>
	)
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
}

export default Button