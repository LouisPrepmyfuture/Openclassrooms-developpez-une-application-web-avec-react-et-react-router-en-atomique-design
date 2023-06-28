import React, { useState } from 'react'
import List from '../../atoms/list'
import Button from '../../atoms/button'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const handleSize = size => {
	switch (size) {
		case "small":
			return `
				max-width:582px;
				width:100%;
			`
		default:
			return "max-width:1023px;"
	}
};

const Dropdown = styled(Button)` 
	width:100%;
	padding:13px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const AccordionStyle = styled.div`
 ${({ size }) => handleSize(size)};
`

const AccordionContentStyle = styled.div`
 ${({ size }) => handleSize(size)};
 padding: 20px;
 min-height: 200px;
 background: var(--secondary);
`

const Accordion = ({title, children, open, size, className}) => {

	const [isActive, setActive] = useState(open);
	const handleClick = () => setActive(!isActive)

	// List ?
	const result = 
		<AccordionContentStyle> 
			{	Array.isArray(children) ? <List children={children} /> : children}
	 </AccordionContentStyle>

	return (
		<AccordionStyle className={className} size={size} >
			<Dropdown isActive={isActive} onClick={() => handleClick()} >
				{title}
				<svg className={` ${isActive ? 'flip' : ''} `} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467Z" fill="white" />
				</svg>
			</Dropdown>
		
				{isActive ? result : null}
		
		</AccordionStyle>
	)
}
Accordion.defaultProps = {
  open: false,
}
Accordion.propTypes = {
  title: PropTypes.any.isRequired
}

export default Accordion