import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockStyle = styled.div
`
  ${({ backgroundImg }) =>
    backgroundImg !== undefined &&
    `background-image: url(${backgroundImg});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;`}
	border-radius: 20px; 
`

const Block = props => {
	const {backgroundImg, children, className, ...other } = props;
	return <BlockStyle backgroundImg={backgroundImg} className={className} {...other} >
		{children}
	</BlockStyle>
}

Block.defaultProps = {
  backgroundImg: undefined,
	to:undefined
}

Block.propTypes = {
  children: PropTypes.any.isRequired,
}
export default Block
