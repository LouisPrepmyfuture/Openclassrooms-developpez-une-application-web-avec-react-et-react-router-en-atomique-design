import React from 'react';
import PropTypes from 'prop-types'
import { TbStarFilled, TbStar } from "react-icons/tb";


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
		<div {...other}>
			{
				stars.map((el, index) => (
					el === 1
					? (<TbStarFilled key={index} />)
					: (<TbStar key={index} />)
				))
			}
		</div>
	)
}
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
}
export default RatingStars