import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from '../../atoms/image'



const AvatarStyle = styled.div
` 
  color: var(--primary);
	text-decoration: none;
`
const ImageStyle = styled(Image)
` 
	
`

const Avatar = ({...props }) => {
	const { link, children,name, url,...other} = props;
	return(<AvatarStyle {...other }>
		{children}
		<ImageStyle url={url} alt={name}/>
	</AvatarStyle>)
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	children: PropTypes.node
}


export default Avatar
