import { useParams } from 'react-router-dom'
import BlockInfo from "../organisms/blockInfo"
import Header from "../organisms/header"
import datas from "../../data/data.json"


function Logement() {
	const { id } = useParams();
	const [ location ] = datas.filter(data => data.id === id)
	
  return (
		<>
			<Header />
			<section>
			
			</section>
			<section>
				<BlockInfo data={location}/>
			</section>
		</>
  )
}

export default Logement
