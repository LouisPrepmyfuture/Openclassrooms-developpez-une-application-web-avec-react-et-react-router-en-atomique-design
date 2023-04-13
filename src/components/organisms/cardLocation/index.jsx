import React from 'react'
import Card from '../../molecules/card'
import styled from 'styled-components'


const BlockLocation = styled.div`
	background: #F7F7F7;
	border-radius: 25px;
	max-width: 1240px;
	border-radius: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 0 50px;
	padding-bottom: 56px;
`


const CardLocation = ({data}) => {

	return (
		<BlockLocation>
			 {
          data.map(({id, title, cover}) => (
            < Card
							key={id}
              id={id}
							to={id}
							backgroundImg={cover}
							children={title}
            />
          ))
        }
		</BlockLocation>
	)
}

CardLocation.defaultProps = {
	children:"Titre de la location"
}

export default CardLocation