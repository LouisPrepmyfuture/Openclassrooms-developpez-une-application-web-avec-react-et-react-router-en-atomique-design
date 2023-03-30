import * as React from 'react'
import classnames from 'classnames'

import Button from '../../atoms/button'
import { useState } from 'react'

import styles from './styles.css'



const Accordion = (props) => {
	const { title, children, className } = props

	const classProps = classnames(
		styles.accordion,
		className
	)
	const [isActive, setActive] = React.useState(false);
	const handleClick = () => {
		setActive(!isActive)
	}

	return (
		<div className={classProps} >
			<Button onClick={() => handleClick()} >
				{title}
				<svg className={`arrow ${isActive ? 'flip' : ''} `} width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24.8401 16.3467L27.2001 13.9733L14.0001 0.786651L0.800071 13.9867L3.16007 16.3467L14.0001 5.50665L24.8401 16.3467Z" fill="white" />
				</svg>
			</Button>
			<div className={`content ${isActive ? 'show' : 'hide'}`}>{children}</div>
		</div>
	)
}

Accordion.defaultProps = {
	className: 'accordion',
	title: "title btn",
	children: "test content"
}

export default Accordion