
import Header from "../organisms/header"
import Tag from "../atoms/tag"
import Card from "../atoms/card"
import Label from "../atoms/label"
import Button from "../atoms/button"
import Accordion from "../molecules/accordion"
function Home() {
  return (
	<>
  	 <Header />
		 <p>page home</p>
		 <Tag />
		 	<Card >
		 		<Label />
			</Card>
			<Button />
			<Accordion>
				Climatisation<br/>
				Wi-Fi<br/>
				Cuisine<br/>
				Espace de travail<br/>
				Fer à repasser<br/>
				Sèche-cheveux<br/>
				Cintres<br/>
			</Accordion>
	</>
  )
}

export default Home
