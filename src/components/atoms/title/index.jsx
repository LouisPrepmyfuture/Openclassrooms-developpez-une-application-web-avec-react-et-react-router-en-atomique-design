import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


const handleSize = lvl => {
  switch (lvl) {
    case "1":
      return `font-size: 48px;`
    default:
      return `font-size: 36px;`
  }
};
const styles = css`
  font-weight: 500;
	margin:0;
	padding:0;
  ${({ lvl }) => handleSize(lvl)};
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
