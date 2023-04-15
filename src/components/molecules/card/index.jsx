import styled from 'styled-components'
import Block from '../../atoms/block'
import { Link } from 'react-router-dom'


const Cardstyle = styled(Block)
`
  max-width:340px;
  min-width: 320px;
	width:100%;
  border-radius: 10px;
  height: 255px;
	overflow: hidden;
`
const LinkCard = styled(Link)
`
	font-weight:500;
	font-size:18px;
	width:100%;
	height:100%;
	display:flex;
	align-items:end;
	padding:20px;
	&:hover{
		background: linear-gradient(to bottom, transparent, #00000080);
	}
`


const Card = ({backgroundImg, children, id, className }) => {
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
