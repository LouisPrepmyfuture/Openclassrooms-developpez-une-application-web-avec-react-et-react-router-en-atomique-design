import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ListStyle = styled.ul`
	width: 100%;
	list-style: none;
	padding: 0;
	margin: 0;
`
const LiStyle = styled.li`
	width: 100%;
	list-style: none;
	padding-bottom: 5px;
`

const List = (props) => {
	const {children, ...other } = props
	const listItems = children.map((item , index) =>
		<LiStyle key={index}>{item}</LiStyle>
	);
  return (
		<ListStyle  {...other}>
			{listItems}
		</ListStyle>
	)
}

Image.propTypes = {
	items: PropTypes.array.isRequired,
}
export default List