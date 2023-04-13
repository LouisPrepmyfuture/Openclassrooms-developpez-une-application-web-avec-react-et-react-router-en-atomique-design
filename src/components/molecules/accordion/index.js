import React,{ useState } from 'react'
import List from '../../atoms/list'
import Button from '../../atoms/button'

export const accordion = {
	DEFAULT: 'default',
	LONG: 'long',
}

const Accordion = ({ title, children, className }) => {


	// handleClick
	const [isActive, setActive] = useState(false);
	const handleClick = () => setActive(!isActive) 

	const result = Array.isArray(children) ? <List children={children} /> : children

	

	return (
		<div className={className} >
			<Button onClick={() => handleClick()} >
				{title}
				<svg className={`arrow ${isActive ? 'flip' : ''} `} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467Z" fill="white" />
				</svg>
			</Button>
			{isActive? result : null }
		</div>
	)
}

Accordion.defaultProps = {
	className: 'accordion',
	title: "title btn",
	children: "test content"
}

export default Accordion