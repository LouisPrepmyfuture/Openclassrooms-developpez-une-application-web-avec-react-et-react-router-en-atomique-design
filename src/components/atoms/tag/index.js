import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const Tag = (props) => {
	const {children, className } = props
	const classProps = classnames(
		styles.tag,
		className
	)

	return (
		<div className={classProps} >
			<span>{children}</span>
		</div>
	)
}

Tag.defaultProps = {
	className:'tag',
	children:"test"
}

export default Tag