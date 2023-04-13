
import Header from "../organisms/header"
import Banner from "../molecules/banner"
import CardLocation from "../organisms/cardLocation"
import ImgBanner from "../../assets/img/banner/banner-home.png"
import data from "../../data/data.json"
import '../_settings/_base.css'
function Home() {

  return (
		<>
			<Header />
			<section>
				<Banner background={ImgBanner} lvl={1} title={"Chez vous, partout et ailleurs"} />
			</section>
			<section>
				<CardLocation data={data} />
			</section>
		</>
  )
}

export default Home
