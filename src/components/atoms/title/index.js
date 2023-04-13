import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const fontSize = ({ lvl }) => `${0.75 + (1 * (1 / lvl))}rem`


const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
`

const Title = styled(({
  lvl, children, ...props
}) => React.createElement(`h${lvl}`,props,children))`${styles}`


Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node
}

Title.defaultProps = {
  children: 'Need Title',
	lvl:2,
}

export default Title
