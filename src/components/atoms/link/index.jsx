import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkStyle = styled(Link)
`
	color: var(--primary);
	text-decoration: none;
`

const LinkAtome = (props) => {
	const {link, children, ...other} = props

	return <LinkStyle  to={link} {...other} >
		{children}
	</LinkStyle>
}

LinkAtome.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Link
