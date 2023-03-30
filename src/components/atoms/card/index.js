import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const Card = (props) => {
	const {children, className } = props
	const classProps = classnames(
		styles.card,
		styles.title,
		className
	)

	return (
		<div className={classProps}>
			{children}
		</div>
	)
}

Card.defaultProps = {
	className:'card',
	children:"Titre de la location"
}

export default Card