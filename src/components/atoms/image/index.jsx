import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const handleTheme = theme => {
	switch (theme) {
		case "round":
			return `
				border-radius:50%;`
		case "logo":
			return `
				border-radius:0;
				`
		default:
			return `
				border-radius:10px; 
			`
	}
};
const handleSize = size => {
	switch (size) {
		case "small":
			return `
				width:64px;
				height:64px;
			`
		case "full":
			return `
				min-width:100%;
				object-fit: cover;`
		default:
			return ""
	}
};

const ImageStyle = styled.img`
	${({ theme }) => handleTheme(theme)};
	${({ size }) => handleSize(size)};
`

const Image = (props) => {
	const { url, alt, size, theme, ...other } = props
	return (
		<ImageStyle size={size} theme={theme} src={url} alt={alt} {...other} />
	)
}

Image.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	Theme: PropTypes.string,
	size: PropTypes.string,
}

export default Image