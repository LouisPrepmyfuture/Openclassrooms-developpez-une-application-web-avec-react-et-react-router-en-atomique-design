import PropTypes from 'prop-types'

const Images = (props) => {
	const {url,alt, ...other } = props
	return (
		<img src={url} alt={alt} {...other} />
	)
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Images