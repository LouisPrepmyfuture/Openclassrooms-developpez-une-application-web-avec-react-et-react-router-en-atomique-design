import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const Label = (props) => {
	const {children, className } = props
	const classProps = classnames(
		styles.Label,
		className
	)

	return (
		<label className={classProps} >
			{children}
		</label>
	)
}

Label.defaultProps = {
	className:'label',
	children: "Title de location"
}

export default Label