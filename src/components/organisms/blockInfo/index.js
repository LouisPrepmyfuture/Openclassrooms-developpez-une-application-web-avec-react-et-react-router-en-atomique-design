import styled from 'styled-components'
import Label from '../../atoms/label'
import Title from '../../atoms/title'
import Tag from '../../atoms/tag'
import Avatar from '../../molecules/avatar'
import Accordion from '../../molecules/accordion'
import RatingStars from '../../atoms/ratingStar'

const Content = styled.div`
	background: #F7F7F7;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const BlockLeft = styled.div`

`
const BlockRight = styled.div`

`
const BlockInfo = ({data}) => {
	console.log(data)
	return (
		<Content>
			<div>
				<Title children={data.title} />
				<Label>{data.location}</Label>
				{
					data.tags.map((tag) => (
						<Tag key={tag} children={tag} />
					))
				}
			</div>
			<div>
			<Avatar url={data.host.picture} alt={data.host.name} children={data.host.name} />
			<RatingStars rating={data.rating} />
			</div>
			<div>
				<div>
					<Accordion title="Description" children={data.description}/>
				</div>
				<div>
					<Accordion title="Description" children={data.equipments}/>
				</div>
			</div>
		</Content>
	)
}

BlockInfo.defaultProps = {
	children:"Titre de la location"
}

export default BlockInfo