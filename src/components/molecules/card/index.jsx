import styled from 'styled-components'
import Block from '../../atoms/block'
import { Link } from 'react-router-dom'


const Cardstyle = styled(Block)
`
	margin: 25px 0 25px 0;
  max-width:340px;
  min-width: 335px;
  border-radius: 10px;
  height: 255px;
	padding:20px;
`
const LinkCard = styled(Link)
`
	font-weight:500;
	font-size:18px;
	width:100%;
	height:100%;
	display:flex;
	align-items:end;
`


const Card = ({ to, backgroundImg, children, id, className }) => {
	return <Cardstyle key={id} id={id} className={className} backgroundImg={backgroundImg}>
					<LinkCard to={`/location/${id}`} >
						{children}
					</LinkCard>
				</Cardstyle>
}

Card.defaultProps = {
  className: 'card',
  children: 'Titre de la location',
  backgroundImg: undefined,
	to:undefined
}

export default Card
