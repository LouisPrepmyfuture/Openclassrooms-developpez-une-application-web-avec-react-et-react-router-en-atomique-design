import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { TbStarFilled, TbStar } from "react-icons/tb";

const ContentStyle = styled.div`
	max-width: 200px;
	min-width:98px;
	padding: 10px 0px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	svg {
		font-size: 24px;
		}
`

const RatingStars = (props) => {

	const {rating , ...other} = props
	let stars = [];

	(function displayStars(rating) {
		for(let i = 1 ; i <= 5 ; i++) {
			i <= rating
			? stars.push(1)
			: stars.push(0)
		}
	})(rating)

	return (
		<ContentStyle {...other}>
			{
				stars.map((el, index) => (
					el === 1
					? (<TbStarFilled key={index} />)
					: (<TbStar key={index} />)
				))
			}
		</ContentStyle>
	)
}
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
}
export default RatingStars