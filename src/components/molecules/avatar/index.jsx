import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from '../../atoms/image'



const AvatarStyle = styled.div
` 
	color: var(--primary);
	display: flex;
	min-width: 165px;
	align-items: center;
	text-align: end;
	@media (max-width: 683px) {
		max-width:93px;
		justify-content: end;
	}
`
const ImageStyle = styled(Image)`
  margin-left: 20px;
`
const Avatar = ({...props }) => {
	const { link, children, name, url, alt,...other} = props;
	return(
	<AvatarStyle {...other }>
		{children}
		<ImageStyle size={'small'} theme={'round'} url={url} alt={alt}/>
	</AvatarStyle>)
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	children: PropTypes.node
}


export default Avatar
